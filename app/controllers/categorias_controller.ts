import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'

export default class CategoriasController {
  async index() {
    return await Categoria.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'slug'])

    const categoria = await Categoria.create(data)

    return categoria
  }

  async show({ params }: HttpContext) {
    return await Categoria.findOrFail(params.id)
  }

  async destroy({ params }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    await categoria.delete()

    return { message: 'Categoria deletada' }
  }
}
