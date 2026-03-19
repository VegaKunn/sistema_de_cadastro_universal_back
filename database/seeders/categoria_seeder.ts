import Categoria from '#models/categoria'

export default class CategoriaSeeder {
  async run() {
    await Categoria.createMany([
      { nome: 'Alimentos', slug: 'alimentos' },
      { nome: 'Bebidas', slug: 'bebidas' },
      { nome: 'Roupas', slug: 'roupas' },
      { nome: 'Peças Automotivas', slug: 'pecas-automotivas' },
      { nome: 'Funcionários', slug: 'funcionarios' },
      { nome: 'Eletrônicos', slug: 'eletronicos' },
    ])
  }
}
