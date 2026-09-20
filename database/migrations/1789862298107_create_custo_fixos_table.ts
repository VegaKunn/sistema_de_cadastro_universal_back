import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'custos_fixos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome').notNullable()
      table.text('descricao').nullable()
      table.decimal('valor', 12, 2).notNullable()
      table.string('categoria').nullable()
      table.integer('dia_vencimento').nullable()
      table.boolean('ativo').notNullable().defaultTo(true)

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
