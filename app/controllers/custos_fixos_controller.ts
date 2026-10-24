import type { HttpContext } from '@adonisjs/core/http'
import CustoFixo from '#models/custo_fixo'

function validarCusto(dados: Record<string, unknown>) {
  const nome = String(dados.nome ?? '').trim()
  const valor = Number(dados.valor)
  const categoria = String(dados.categoria ?? '').trim() || null
  const descricao = String(dados.descricao ?? '').trim() || null

  const diaVencimento =
    dados.diaVencimento === null || dados.diaVencimento === undefined || dados.diaVencimento === ''
      ? null
      : Number(dados.diaVencimento)

  if (!nome) throw new Error('Informe o nome da despesa.')

  if (
    dados.valor === null ||
    dados.valor === undefined ||
    dados.valor === '' ||
    !Number.isFinite(valor) ||
    valor < 0
  ) {
    throw new Error('Informe um valor válido.')
  }

  if (
    diaVencimento !== null &&
    (!Number.isInteger(diaVencimento) || diaVencimento < 1 || diaVencimento > 31)
  ) {
    throw new Error('O vencimento deve estar entre 1 e 31.')
  }

  if (nome.length > 255 || (categoria?.length ?? 0) > 255) {
    throw new Error('Nome ou categoria muito longo.')
  }

  if (Math.round(valor * 100) > 999999999999) {
    throw new Error('Valor acima do limite permitido.')
  }

  return {
    nome,
    valor: Number(valor.toFixed(2)),
    categoria,
    descricao,
    diaVencimento,
  }
}

export default class CustosFixosController {
  // GET /api/v1/custos-fixos
  async index({ request, response }: HttpContext) {
    const somenteAtivos = request.input('ativos') !== 'false'

    const query = CustoFixo.query().orderBy('nome', 'asc')

    if (somenteAtivos) {
      query.where('ativo', true)
    }

    const custos = await query

    const total = custos
      .filter((custo) => custo.ativo)
      .reduce((soma, custo) => soma + Number(custo.valor), 0)

    return response.ok({
      data: custos,
      total: Number(total.toFixed(2)),
    })
  }

  // POST /api/v1/custos-fixos
  async store({ request, response }: HttpContext) {
    let dados

    try {
      dados = validarCusto(request.all())
    } catch (error) {
      return response.badRequest({
        message: (error as Error).message,
      })
    }

    const custo = await CustoFixo.create({
      ...dados,
      ativo: true,
    })

    return response.created(custo)
  }

  // PUT /api/v1/custos-fixos/:id
  async update({ params, request, response }: HttpContext) {
    const custo = await CustoFixo.findOrFail(params.id)

    let dados

    try {
      dados = validarCusto(request.all())
    } catch (error) {
      return response.badRequest({
        message: (error as Error).message,
      })
    }

    custo.merge({
      ...dados,
      ativo: typeof request.input('ativo') === 'boolean' ? request.input('ativo') : custo.ativo,
    })

    await custo.save()

    return response.ok(custo)
  }

  // PATCH /api/v1/custos-fixos/:id/ativo
  async alterarStatus({ params, response }: HttpContext) {
    const custo = await CustoFixo.findOrFail(params.id)

    custo.ativo = !custo.ativo

    await custo.save()

    return response.ok(custo)
  }

  // DELETE /api/v1/custos-fixos/:id
  async destroy({ params, response }: HttpContext) {
    const custo = await CustoFixo.findOrFail(params.id)

    await custo.delete()

    return response.ok({
      message: 'Custo fixo excluído com sucesso.',
    })
  }
}
