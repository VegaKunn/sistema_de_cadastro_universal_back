import Campo from '#models/campo'

export default class CampoSeeder {
  async run() {
    await Campo.createMany([
      {
        nome: 'sku',
        label: 'sku',
        tipo: 'texto',
      },
      {
        nome: 'nome',
        label: 'nome',
        tipo: 'texto',
      },
      {
        nome: 'peso',
        label: 'Peso',
        tipo: 'texto',
      },
      {
        nome: 'preco',
        label: 'preco',
        tipo: 'decimal',
      },
      {
        nome: 'atrivo',
        label: 'atrivo',
        tipo: 'checkbox',
      },
      {
        nome: 'tags',
        label: 'tags',
        tipo: 'texto',
      },
      {
        nome: 'marca',
        label: 'marca',
        tipo: 'texto',
      },
      {
        nome: 'modelo',
        label: 'modelo',
        tipo: 'texto',
      },
      {
        nome: 'unidade',
        label: 'unidade',
        tipo: 'decimal',
      },
      {
        nome: 'validade',
        label: 'validade',
        tipo: 'data',
      },
      {
        nome: 'codigo_barra',
        label: 'codigo_barra',
        tipo: 'texto',
      },
      {
        nome: 'imagem',
        label: 'imagem',
        tipo: 'imagem',
      },
    ])
  }
}
