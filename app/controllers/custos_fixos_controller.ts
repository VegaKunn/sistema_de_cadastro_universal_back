import type { HttpContext } from '@adonisjs/core/http'

import CustoFixo from '#models/custo_fixo'

export default class CustosFixosController {
  async index({ response }: HttpContext) {
    const custos = await CustoFixo.query().where('ativo', true).orderBy('nome', 'asc')

    const total = custos.reduce((soma, custo) => {
      return soma + Number(custo.valor)
    }, 0)

    return response.ok({
      data: custos,
      total: Number(total.toFixed(2)),
    })
  }
}
