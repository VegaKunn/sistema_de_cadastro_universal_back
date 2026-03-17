import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'campos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Relação com categoria
      table
        .integer('categoria_id')
        .unsigned()
        .references('id')
        .inTable('categorias')
        .onDelete('CASCADE')

      // Nome interno do campo (para salvar no JSON)
      table.string('nome').notNullable()

      // Label do campo para mostrar no formulário
      table.string('label').notNullable()

      // Tipo do campo: texto, numero, decimal, select, checkbox, date, imagem
      table
        .enu('tipo', ['texto', 'numero', 'decimal', 'select', 'checkbox', 'data', 'imagem'])
        .defaultTo('texto')

      // Indica se o campo é obrigatório
      table.boolean('obrigatorio').defaultTo(false)

      // Ordem de exibição do campo no formulário
      table.integer('ordem').defaultTo(0)

      // Opções em JSON string (usado para select, checkbox)
      table.text('opcoes').nullable()

      table.timestamps(true, true) // created_at e updated_at com timezone
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
