import { BaseSeeder } from '@adonisjs/lucid/seeders'

import CustoFixo from '#models/custo_fixo'

export default class extends BaseSeeder {
  public async run() {
    await CustoFixo.createMany([
      {
        nome: 'Aluguel',
        descricao: 'Aluguel mensal do estabelecimento',
        valor: 2500,
        categoria: 'aluguel',
        diaVencimento: 10,
        ativo: true,
      },
      {
        nome: 'Energia elétrica',
        descricao: 'Conta mensal de energia',
        valor: 650,
        categoria: 'energia',
        diaVencimento: 15,
        ativo: true,
      },
      {
        nome: 'Internet',
        descricao: 'Plano empresarial de internet',
        valor: 180,
        categoria: 'internet',
        diaVencimento: 12,
        ativo: true,
      },
      {
        nome: 'Água',
        descricao: 'Conta mensal de água',
        valor: 220,
        categoria: 'agua',
        diaVencimento: 20,
        ativo: true,
      },
      {
        nome: 'Contabilidade',
        descricao: 'Serviço mensal de contabilidade',
        valor: 450,
        categoria: 'servicos',
        diaVencimento: 5,
        ativo: true,
      },
      {
        nome: 'Sistema / Software',
        descricao: 'Licenças e serviços de software',
        valor: 300,
        categoria: 'tecnologia',
        diaVencimento: 8,
        ativo: true,
      },
      {
        nome: 'Telefone',
        descricao: 'Plano de telefonia empresarial',
        valor: 120,
        categoria: 'telefonia',
        diaVencimento: 18,
        ativo: true,
      },
      {
        nome: 'Limpeza',
        descricao: 'Materiais e serviços de limpeza',
        valor: 350,
        categoria: 'manutencao',
        diaVencimento: 25,
        ativo: true,
      },
    ])
  }
}
