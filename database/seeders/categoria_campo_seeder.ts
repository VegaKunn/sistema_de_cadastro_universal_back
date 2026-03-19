import Categoria from '#models/categoria'
import Campo from '#models/campo'

export default class CategoriaCampoSeeder {
  async run() {
    const roupas = await Categoria.findByOrFail('slug', 'roupas')

    const cor = await Campo.findByOrFail('nome', 'cor')
    const tamanho = await Campo.findByOrFail('nome', 'tamanho')

    await roupas.related('campos').attach({
      [cor.id]: { obrigatorio: true, ordem: 1 },
      [tamanho.id]: { obrigatorio: true, ordem: 2 },
    })
  }
}
