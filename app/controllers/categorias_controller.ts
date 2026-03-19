import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'

export default class CategoriasController {
  // 📄 Listar categorias (com campos)
  async index() {
    return await Categoria.query().preload('campos')
  }

  // ➕ Criar categoria + vincular campos
  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'slug'])
    const campos = request.input('campos', [])

    const categoria = await Categoria.create(data)

    // monta dados do pivot
    const pivotData: Record<number, any> = {}

    campos.forEach((campo: any, index: number) => {
      const campoId = typeof campo === 'number' ? campo : campo.id

      pivotData[campoId] = {
        obrigatorio: campo.obrigatorio ?? false,
        ordem: index,
      }
    })

    if (Object.keys(pivotData).length) {
      await categoria.related('campos').attach(pivotData)
    }

    return categoria
  }

  // 🔍 Buscar categoria com campos
  async show({ params }: HttpContext) {
    const categoria = await Categoria.query()
      .where('id', params.id)
      .preload('campos', (query) => {
        query.orderBy('categoria_campos.ordem')
      })
      .firstOrFail()

    return categoria
  }

  // 🧨 Deletar categoria
  async destroy({ params }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)

    await categoria.delete()

    return { message: 'Categoria deletada' }
  }

  // 🔄 Atualizar categoria + sync de campos
  async update({ params, request }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)

    const data = request.only(['nome', 'slug'])
    const campos = request.input('campos', [])

    categoria.merge(data)
    await categoria.save()

    const pivotData: Record<number, any> = {}

    campos.forEach((campo: any, index: number) => {
      const campoId = typeof campo === 'number' ? campo : campo.id

      pivotData[campoId] = {
        obrigatorio: campo.obrigatorio ?? false,
        ordem: index,
      }
    })

    await categoria.related('campos').sync(pivotData)

    return categoria
  }
}
