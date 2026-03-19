import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categoria_campos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('categoria_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categorias')
        .onDelete('CASCADE')

      table
        .integer('campo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('campos')
        .onDelete('CASCADE')

      // config por categoria
      table.boolean('obrigatorio').defaultTo(false)
      table.integer('ordem').defaultTo(0)

      // override opcional
      table.string('label_override').nullable()
      table.json('config_override').nullable()

      table.unique(['categoria_id', 'campo_id'])

      table.index(['categoria_id'])
      table.index(['campo_id'])

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
