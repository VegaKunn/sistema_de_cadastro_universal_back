import type { HttpContext } from '@adonisjs/core/http'
import Campo from '#models/campo'

export default class CamposController {
  async index({ params }: HttpContext) {
    return await Campo.query().where('categoria_id', params.categoriaId).orderBy('ordem')
  }

  async store({ request }: HttpContext) {
    const data = request.only(['categoriaId', 'nome', 'label', 'tipo', 'ordem'])

    const campo = await Campo.create(data)

    return campo
  }

  async destroy({ params }: HttpContext) {
    const campo = await Campo.findOrFail(params.id)
    await campo.delete()

    return { message: 'Campo deletado' }
  }
}
