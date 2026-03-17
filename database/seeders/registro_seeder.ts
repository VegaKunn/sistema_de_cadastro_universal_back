import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'
import Registro from '#models/registro'

export default class extends BaseSeeder {
  public async run() {
    await Registro.createMany([
      /* ALIMENTOS */
      {
        categoriaId: 1,
        sku: 'ALM001',
        nome: 'Arroz',
        preco: 25.0,
        quantidade: 50,
        ativo: true,
        marca: 'Tio João',
        validade: DateTime.fromISO('2026-01-01'),
        dadosJson: JSON.stringify({ tipo: 'Integral', embalagem: '1kg' }),
      },
      {
        categoriaId: 1,
        sku: 'ALM002',
        nome: 'Feijão',
        preco: 18.0,
        quantidade: 30,
        ativo: true,
        marca: 'Carioca',
        validade: DateTime.fromISO('2026-01-01'),
        dadosJson: JSON.stringify({ tipo: 'Carioca', embalagem: '1kg' }),
      },

      /* BEBIDAS */
      {
        categoriaId: 2,
        sku: 'BEB001',
        nome: 'Refrigerante Cola',
        preco: 6.5,
        quantidade: 100,
        ativo: true,
        marca: 'Coca-Cola',
        validade: DateTime.fromISO('2026-01-01'),
        dadosJson: JSON.stringify({ volume: '2L', tipo: 'Gaseificado' }),
      },

      /* ROUPAS MASCULINAS */
      {
        categoriaId: 4,
        sku: 'ROU001',
        nome: 'Camiseta Polo',
        preco: 79.9,
        quantidade: 25,
        ativo: true,
        marca: 'Lacoste',
        dadosJson: JSON.stringify({ tamanho: 'M', cor: 'Azul' }),
      },

      /* PEÇAS AUTOMOTIVAS */
      {
        categoriaId: 11,
        sku: 'PEC001',
        nome: 'Filtro de Óleo',
        preco: 45.0,
        quantidade: 60,
        ativo: true,
        marca: 'Bosch',
        modelo: 'Fiat Uno 2010',
        peso: 0.5,
        dadosJson: JSON.stringify({ tipo: 'Filtro', aplicacao: 'Motor 1.0' }),
      },

      /* FUNCIONÁRIOS */
      {
        categoriaId: 16,
        sku: 'FUNC001',
        nome: 'João Silva',
        ativo: true,
        dadosJson: JSON.stringify({
          cargo: 'Instalador',
          salario: 2500.0,
          dataAdmissao: '2023-03-15',
        }),
      },

      /* ELETRÔNICOS */
      {
        categoriaId: 9,
        sku: 'ELE001',
        nome: 'Notebook Gamer',
        preco: 7500.0,
        quantidade: 10,
        ativo: true,
        marca: 'Dell',
        modelo: 'G15',
        dadosJson: JSON.stringify({
          processador: 'Intel i7',
          ram: '16GB',
          armazenamento: '512GB SSD',
        }),
      },
    ])
  }
}
