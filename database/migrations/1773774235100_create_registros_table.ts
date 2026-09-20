import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'registros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('categoria_id')
        .unsigned()
        .references('id')
        .inTable('categorias')
        .onDelete('CASCADE')
        .notNullable()

      table.json('dados_json').notNullable()

      table.string('sku').notNullable().unique()
      table.string('nome').notNullable()

      // Financeiro
      table.decimal('custo', 12, 2).notNullable().defaultTo(0)
      table.decimal('preco', 12, 2).notNullable().defaultTo(0)

      table.integer('quantidade').defaultTo(0)
      table.boolean('ativo').defaultTo(true)
      table.json('tags').nullable()
      table.string('marca').nullable()
      table.string('modelo').nullable()
      table.decimal('peso', 10, 2).nullable()
      table.string('unidade', 10).nullable()
      table.date('validade').nullable()
      table.string('codigo_barra').nullable()
      table.string('imagem').nullable()

      table
        .integer('created_by')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')

      table
        .integer('updated_by')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
