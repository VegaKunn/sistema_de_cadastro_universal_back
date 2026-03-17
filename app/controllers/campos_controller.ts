import type { HttpContext } from '@adonisjs/core/http'

import Campo from '#models/campo'

export default class CamposController {
  // Listar campos por categoria, ordenados
  async index({ params }: HttpContext) {
    return await Campo.query().where('categoria_id', params.categoriaId).orderBy('ordem')
  }

  // Criar um novo campo
  async store({ request }: HttpContext) {
    // Obter apenas os campos permitidos
    const data = request.only([
      'categoriaId',
      'nome',
      'label',
      'tipo',
      'ordem',
      'obrigatorio',
      'opcoes',
    ])

    // Garantir defaults
    if (!data.tipo) data.tipo = 'texto'
    if (data.obrigatorio === undefined) data.obrigatorio = false
    if (!data.ordem) data.ordem = 0
    if (!data.opcoes) data.opcoes = null

    const campo = await Campo.create(data)
    return campo
  }

  // Deletar campo
  async destroy({ params }: HttpContext) {
    const campo = await Campo.findOrFail(params.id)
    await campo.delete()

    return { message: 'Campo deletado com sucesso' }
  }
}
