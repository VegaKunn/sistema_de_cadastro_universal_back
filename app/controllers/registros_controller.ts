import type { HttpContext } from '@adonisjs/core/http'

import Registro from '#models/registro'

export default class RegistrosController {
  // Listar registros por categoria, do mais recente ao mais antigo
  async index({ params }: HttpContext) {
    return await Registro.query().where('categoria_id', params.categoriaId).orderBy('id', 'desc')
  }

  // Criar novo registro
  async store({ request, auth }: HttpContext) {
    const {
      categoriaId,
      dados, // campos dinâmicos da categoria
      sku,
      nome,
      preco,
      quantidade,
      ativo,
      tags,
      marca,
      modelo,
      peso,
      unidade,
      validade,
      codigoBarra,
      imagem,
    } = request.only([
      'categoriaId',
      'dados',
      'sku',
      'nome',
      'preco',
      'quantidade',
      'ativo',
      'tags',
      'marca',
      'modelo',
      'peso',
      'unidade',
      'validade',
      'codigoBarra',
      'imagem',
    ])

    const registro = await Registro.create({
      categoriaId,
      dadosJson: dados || {},
      sku,
      nome,
      preco: preco ?? null,
      quantidade: quantidade ?? 0,
      ativo: ativo ?? true,
      tags: tags ? JSON.stringify(tags) : null,
      marca: marca ?? null,
      modelo: modelo ?? null,
      peso: peso ?? null,
      unidade: unidade ?? null,
      validade: validade ?? null,
      codigoBarra: codigoBarra ?? null,
      imagem: imagem ?? null,
      createdBy: auth.user?.id ?? null,
    })

    return registro
  }

  // Deletar registro
  async destroy({ params }: HttpContext) {
    const registro = await Registro.findOrFail(params.id)
    await registro.delete()

    return { message: 'Registro deletado com sucesso' }
  }
}
