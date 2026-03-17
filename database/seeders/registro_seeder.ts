import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Registro from '#models/registro'

export default class extends BaseSeeder {
  async run() {
    await Registro.createMany([
      {
        categoriaId: 1,
        dadosJson: JSON.stringify({
          nome: 'Arroz',
          preco: 25,
        }),
      },
      {
        categoriaId: 2,
        dadosJson: JSON.stringify({
          nome: 'Parafuso',
          quantidade: 300,
        }),
      },
      {
        categoriaId: 3,
        dadosJson: JSON.stringify({
          nome: 'João',
          cargo: 'Instalador',
        }),
      },
    ])
  }
}
