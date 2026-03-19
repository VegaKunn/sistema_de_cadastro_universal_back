import type { HttpContext } from '@adonisjs/core/http'

import Campo from '#models/campo'
import Categoria from '#models/categoria'

export default class CamposController {
  // 🔍 Listar campos de uma categoria (via pivot)
  async index({ params }: HttpContext) {
    const categoria = await Categoria.query()
      .where('id', params.categoriaId)
      .preload('campos', (query) => {
        query.orderBy('categoria_campos.ordem')
      })
      .firstOrFail()

    return categoria.campos
  }

  // ➕ Criar um novo campo (GLOBAL, não pertence à categoria)
  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'label', 'tipo', 'opcoes', 'config'])

    // defaults
    if (!data.tipo) data.tipo = 'texto'
    if (!data.opcoes) data.opcoes = null
    if (!data.config) data.config = null

    const campo = await Campo.create(data)

    return campo
  }

  // ❌ Deletar campo (global)
  async destroy({ params }: HttpContext) {
    const campo = await Campo.findOrFail(params.id)

    await campo.delete()

    return { message: 'Campo deletado com sucesso' }
  }
}
