import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CategoriaSeeder extends BaseSeeder {
  async run() {
    await Categoria.createMany([
      {
        nome: 'Alimentos',
        slug: 'alimentos',
      },
      {
        nome: 'Produtos',
        slug: 'produtos',
      },
      {
        nome: 'Funcionários',
        slug: 'funcionarios',
      },
    ])
  }
}
