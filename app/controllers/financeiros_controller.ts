import type { HttpContext } from '@adonisjs/core/http'

import Venda from '#models/venda'
import CustoFixo from '#models/custo_fixo'

export default class FinanceiroController {
  async resumo({ response }: HttpContext) {
    const vendas = await Venda.query().where('status', 'concluida')

    const custosFixos = await CustoFixo.query().where('ativo', true)

    const faturamento = vendas.reduce((total, venda) => total + Number(venda.total || 0), 0)

    const custoProdutos = vendas.reduce((total, venda) => total + Number(venda.custoTotal || 0), 0)

    const lucroBruto = vendas.reduce((total, venda) => total + Number(venda.lucroBruto || 0), 0)

    const totalCustosFixos = custosFixos.reduce(
      (total, custo) => total + Number(custo.valor || 0),
      0
    )

    const resultadoLiquido = lucroBruto - totalCustosFixos

    return response.ok({
      faturamento: Number(faturamento.toFixed(2)),
      custoProdutos: Number(custoProdutos.toFixed(2)),
      lucroBruto: Number(lucroBruto.toFixed(2)),
      custosFixos: Number(totalCustosFixos.toFixed(2)),
      resultadoLiquido: Number(resultadoLiquido.toFixed(2)),

      quantidadeVendas: vendas.length,
      quantidadeCustosFixos: custosFixos.length,
    })
  }
}
