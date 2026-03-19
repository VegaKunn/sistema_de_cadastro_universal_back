import Campo from '#models/campo'

export default class CampoSeeder {
  async run() {
    await Campo.createMany([
      {
        nome: 'cor',
        label: 'Cor',
        tipo: 'select',
        opcoes: ['vermelho', 'azul', 'verde'],
      },
      {
        nome: 'tamanho',
        label: 'Tamanho',
        tipo: 'select',
        opcoes: ['P', 'M', 'G'],
      },
      {
        nome: 'peso',
        label: 'Peso',
        tipo: 'decimal',
      },
      {
        nome: 'descricao',
        label: 'Descrição',
        tipo: 'texto',
      },
    ])
  }
}
