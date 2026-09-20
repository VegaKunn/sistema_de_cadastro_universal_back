import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'venda_itens'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('venda_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('vendas')
        .onDelete('CASCADE')

      table
        .integer('registro_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('registros')
        .onDelete('SET NULL')

      // Snapshot para preservar histórico
      table.string('produto_nome').notNullable()
      table.string('produto_sku').nullable()

      table.integer('quantidade').notNullable().defaultTo(1)

      // preço no momento da venda
      table.decimal('preco_unitario', 12, 2).notNullable()

      // custo no momento da venda
      table.decimal('custo_unitario', 12, 2).notNullable()

      // preco_unitario * quantidade
      table.decimal('subtotal', 12, 2).notNullable()

      // custo_unitario * quantidade
      table.decimal('custo_total', 12, 2).notNullable()

      // subtotal - custo_total
      table.decimal('lucro_bruto', 12, 2).notNullable()

      table.timestamps(true, true)

      table.index(['venda_id'])
      table.index(['registro_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
