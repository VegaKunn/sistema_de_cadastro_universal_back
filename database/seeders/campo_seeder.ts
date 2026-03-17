import { BaseSeeder } from '@adonisjs/lucid/seeders'

import Campo from '#models/campo'

export default class extends BaseSeeder {
  async run() {
    await Campo.createMany([
      /* ALIMENTOS */
      {
        categoriaId: 1,
        nome: 'nome',
        label: 'Nome',
        tipo: 'text',
        ordem: 1,
      },
      {
        categoriaId: 1,
        nome: 'preco',
        label: 'Preço',
        tipo: 'number',
        ordem: 2,
      },

      /* PRODUTOS */
      {
        categoriaId: 2,
        nome: 'nome',
        label: 'Nome',
        tipo: 'text',
        ordem: 1,
      },
      {
        categoriaId: 2,
        nome: 'quantidade',
        label: 'Quantidade',
        tipo: 'number',
        ordem: 2,
      },

      /* FUNCIONÁRIOS */
      {
        categoriaId: 3,
        nome: 'nome',
        label: 'Nome',
        tipo: 'text',
        ordem: 1,
      },
      {
        categoriaId: 3,
        nome: 'cargo',
        label: 'Cargo',
        tipo: 'text',
        ordem: 2,
      },
    ])
  }
}
