import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

import Categoria from '#models/categoria'
import Registro from '#models/registro'

export default class extends BaseSeeder {
  public async run() {
    const alimentos = await Categoria.findByOrFail('slug', 'alimentos')
    const bebidas = await Categoria.findByOrFail('slug', 'bebidas')
    const roupas = await Categoria.findByOrFail('slug', 'roupas')
    const pecas = await Categoria.findByOrFail('slug', 'pecas-automotivas')
    const funcionarios = await Categoria.findByOrFail('slug', 'funcionarios')
    const eletronicos = await Categoria.findByOrFail('slug', 'eletronicos')

    await Registro.createMany([
      /* ALIMENTOS */
      {
        categoriaId: alimentos.id,
        sku: 'ALM001',
        nome: 'Arroz',
        preco: 25.0,
        quantidade: 50,
        ativo: true,
        marca: 'Tio João',
        validade: DateTime.fromISO('2026-01-01'),
        dadosJson: { tipo: 'Integral', embalagem: '1kg' },
      },
      {
        categoriaId: alimentos.id,
        sku: 'ALM002',
        nome: 'Feijão',
        preco: 18.0,
        quantidade: 30,
        ativo: true,
        marca: 'Carioca',
        validade: DateTime.fromISO('2026-01-01'),
        dadosJson: { tipo: 'Carioca', embalagem: '1kg' },
      },

      /* BEBIDAS */
      {
        categoriaId: bebidas.id,
        sku: 'BEB001',
        nome: 'Refrigerante Cola',
        preco: 6.5,
        quantidade: 100,
        ativo: true,
        marca: 'Coca-Cola',
        validade: DateTime.fromISO('2026-01-01'),
        dadosJson: { volume: '2L', tipo: 'Gaseificado' },
      },

      /* ROUPAS */
      {
        categoriaId: roupas.id,
        sku: 'ROU001',
        nome: 'Camiseta Polo',
        preco: 79.9,
        quantidade: 25,
        ativo: true,
        marca: 'Lacoste',
        dadosJson: { tamanho: 'M', cor: 'Azul' },
      },

      /* PEÇAS */
      {
        categoriaId: pecas.id,
        sku: 'PEC001',
        nome: 'Filtro de Óleo',
        preco: 45.0,
        quantidade: 60,
        ativo: true,
        marca: 'Bosch',
        modelo: 'Fiat Uno 2010',
        peso: 0.5,
        dadosJson: { tipo: 'Filtro', aplicacao: 'Motor 1.0' },
      },

      /* FUNCIONÁRIOS */
      {
        categoriaId: funcionarios.id,
        sku: 'FUNC001',
        nome: 'João Silva',
        ativo: true,
        dadosJson: {
          cargo: 'Instalador',
          salario: 2500.0,
          dataAdmissao: '2023-03-15',
        },
      },

      /* ELETRÔNICOS */
      {
        categoriaId: eletronicos.id,
        sku: 'ELE001',
        nome: 'Notebook Gamer',
        preco: 7500.0,
        quantidade: 10,
        ativo: true,
        marca: 'Dell',
        modelo: 'G15',
        dadosJson: {
          processador: 'Intel i7',
          ram: '16GB',
          armazenamento: '512GB SSD',
        },
      },
    ])
  }
}
