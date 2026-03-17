import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Campo from '#models/campo'

export default class CampoSeeder extends BaseSeeder {
  public async run() {
    await Campo.createMany([
      /* ALIMENTOS */
      {
        categoriaId: 1,
        nome: 'nome',
        label: 'Nome',
        tipo: 'texto',
        ordem: 1,
        obrigatorio: true,
      },
      {
        categoriaId: 1,
        nome: 'preco',
        label: 'Preço',
        tipo: 'decimal',
        ordem: 2,
        obrigatorio: true,
      },
      {
        categoriaId: 1,
        nome: 'validade',
        label: 'Validade',
        tipo: 'data',
        ordem: 3,
      },
      {
        categoriaId: 1,
        nome: 'marca',
        label: 'Marca',
        tipo: 'texto',
        ordem: 4,
      },

      /* BEBIDAS */
      {
        categoriaId: 2,
        nome: 'nome',
        label: 'Nome',
        tipo: 'texto',
        ordem: 1,
        obrigatorio: true,
      },
      {
        categoriaId: 2,
        nome: 'volume',
        label: 'Volume (L)',
        tipo: 'decimal',
        ordem: 2,
      },

      /* ROUPAS MASCULINAS */
      {
        categoriaId: 4,
        nome: 'nome',
        label: 'Nome',
        tipo: 'texto',
        ordem: 1,
        obrigatorio: true,
      },
      {
        categoriaId: 4,
        nome: 'tamanho',
        label: 'Tamanho',
        tipo: 'select',
        opcoes: JSON.stringify(['P', 'M', 'G', 'GG']),
        ordem: 2,
      },
      {
        categoriaId: 4,
        nome: 'cor',
        label: 'Cor',
        tipo: 'texto',
        ordem: 3,
      },

      /* PEÇAS AUTOMOTIVAS */
      {
        categoriaId: 11,
        nome: 'nome',
        label: 'Nome da Peça',
        tipo: 'texto',
        ordem: 1,
        obrigatorio: true,
      },
      {
        categoriaId: 11,
        nome: 'modelo',
        label: 'Modelo do Veículo',
        tipo: 'texto',
        ordem: 2,
      },
      {
        categoriaId: 11,
        nome: 'marca',
        label: 'Marca / Fabricante',
        tipo: 'texto',
        ordem: 3,
      },
      {
        categoriaId: 11,
        nome: 'peso',
        label: 'Peso (kg)',
        tipo: 'decimal',
        ordem: 4,
      },

      /* FUNCIONÁRIOS */
      {
        categoriaId: 16,
        nome: 'nome',
        label: 'Nome',
        tipo: 'texto',
        ordem: 1,
        obrigatorio: true,
      },
      {
        categoriaId: 16,
        nome: 'cargo',
        label: 'Cargo',
        tipo: 'texto',
        ordem: 2,
      },
      {
        categoriaId: 16,
        nome: 'salario',
        label: 'Salário',
        tipo: 'decimal',
        ordem: 3,
      },
      {
        categoriaId: 16,
        nome: 'dataAdmissao',
        label: 'Data de Admissão',
        tipo: 'data',
        ordem: 4,
      },
    ])
  }
}
