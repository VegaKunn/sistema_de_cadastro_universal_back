import type { HttpContext } from '@adonisjs/core/http'
import Registro from '#models/registro'

export default class RegistrosController {
  async index({ params }: HttpContext) {
    return await Registro.query().where('categoria_id', params.categoriaId).orderBy('id', 'desc')
  }

  async store({ request }: HttpContext) {
    const { categoriaId, dados } = request.only(['categoriaId', 'dados'])

    const registro = await Registro.create({
      categoriaId,
      dadosJson: JSON.stringify(dados),
    })

    return registro
  }

  async destroy({ params }: HttpContext) {
    const registro = await Registro.findOrFail(params.id)
    await registro.delete()

    return { message: 'Registro deletado' }
  }
}
