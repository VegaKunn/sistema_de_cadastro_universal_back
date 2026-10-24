import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

import Venda from '#models/venda'
import VendaItem from '#models/venda_item'
import Registro from '#models/registro'

export default class VendasController {
  /**
   * GET /vendas
   *
   * Lista o histórico de vendas.
   */
  async index({ request, response }: HttpContext) {
    const pagina = request.input('page', 1)
    const porPagina = request.input('perPage', 20)

    const vendas = await Venda.query()
      .preload('itens')
      .orderBy('createdAt', 'desc')
      .paginate(pagina, porPagina)

    return response.ok(vendas)
  }

  /**
   * GET /vendas/:id
   *
   * Retorna uma venda completa.
   */
  async show({ params, response }: HttpContext) {
    const venda = await Venda.query()
      .where('id', params.id)
      .preload('itens', (query) => {
        query.preload('registro')
      })
      .firstOrFail()

    return response.ok(venda)
  }

  /**
   * POST /vendas
   *
   * Cria uma venda e baixa o estoque.
   */
  async store({ request, auth, response }: HttpContext) {
    const {
      itens,
      desconto = 0,
      formaPagamento = null,
      observacao = null,
    } = request.only(['itens', 'desconto', 'formaPagamento', 'observacao'])

    if (!Array.isArray(itens) || itens.length === 0) {
      return response.badRequest({
        message: 'A venda precisa possuir pelo menos um item.',
      })
    }

    const usuario = auth.user

    const venda = await db.transaction(async (trx) => {
      let subtotal = 0
      let custoTotal = 0

      const itensCalculados: {
        registro: Registro
        quantidade: number
        precoUnitario: number
        custoUnitario: number
        subtotal: number
        custoTotal: number
        lucroBruto: number
      }[] = []

      /**
       * Primeiro buscamos e validamos todos os produtos.
       */
      for (const item of itens) {
        const registro = await Registro.query({ client: trx })
          .where('id', item.registroId)
          .firstOrFail()

        const quantidade = Number(item.quantidade)

        if (!quantidade || quantidade <= 0) {
          throw new Error(`Quantidade inválida para o produto ${registro.nome}`)
        }

        if (registro.quantidade < quantidade) {
          throw new Error(`Estoque insuficiente para ${registro.nome}`)
        }

        const precoUnitario = Number(registro.preco ?? 0)
        const custoUnitario = Number(registro.custo ?? 0)

        const subtotalItem = precoUnitario * quantidade
        const custoItem = custoUnitario * quantidade
        const lucroItem = subtotalItem - custoItem

        subtotal += subtotalItem
        custoTotal += custoItem

        itensCalculados.push({
          registro,
          quantidade,
          precoUnitario,
          custoUnitario,
          subtotal: subtotalItem,
          custoTotal: custoItem,
          lucroBruto: lucroItem,
        })
      }

      const descontoNumerico = Number(desconto) || 0

      if (descontoNumerico < 0) {
        throw new Error('O desconto não pode ser negativo.')
      }

      if (descontoNumerico > subtotal) {
        throw new Error('O desconto não pode ser maior que o subtotal.')
      }

      const total = subtotal - descontoNumerico

      /**
       * O desconto reduz o lucro da venda.
       */
      const lucroBruto = total - custoTotal

      /**
       * Cria a venda.
       */
      const novaVenda = new Venda()

      novaVenda.usuarioId = usuario?.id ?? null
      novaVenda.subtotal = Number(subtotal.toFixed(2))
      novaVenda.desconto = Number(descontoNumerico.toFixed(2))
      novaVenda.total = Number(total.toFixed(2))
      novaVenda.custoTotal = Number(custoTotal.toFixed(2))
      novaVenda.lucroBruto = Number(lucroBruto.toFixed(2))
      novaVenda.formaPagamento = formaPagamento
      novaVenda.status = 'concluida'
      novaVenda.observacao = observacao

      novaVenda.useTransaction(trx)

      await novaVenda.save()

      /**
       * Cria os itens e baixa o estoque.
       */
      for (const item of itensCalculados) {
        const vendaItem = new VendaItem()

        vendaItem.vendaId = novaVenda.id
        vendaItem.registroId = item.registro.id

        /**
         * Snapshot.
         *
         * Mesmo que o produto seja alterado no futuro,
         * a venda mantém os dados da época.
         */
        vendaItem.produtoNome = item.registro.nome
        vendaItem.produtoSku = item.registro.sku

        vendaItem.quantidade = item.quantidade

        vendaItem.precoUnitario = Number(item.precoUnitario.toFixed(2))

        vendaItem.custoUnitario = Number(item.custoUnitario.toFixed(2))

        vendaItem.subtotal = Number(item.subtotal.toFixed(2))

        vendaItem.custoTotal = Number(item.custoTotal.toFixed(2))

        vendaItem.lucroBruto = Number(item.lucroBruto.toFixed(2))

        vendaItem.useTransaction(trx)

        await vendaItem.save()

        /**
         * Baixa estoque.
         */
        item.registro.useTransaction(trx)

        item.registro.quantidade -= item.quantidade

        await item.registro.save()
      }

      return novaVenda
    })

    /**
     * Recarrega a venda já com os itens.
     */
    await venda.load('itens')

    return response.created(venda)
  }
}
