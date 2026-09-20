import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('usuario_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')

      // Valor dos produtos antes do desconto
      table.decimal('subtotal', 12, 2).notNullable().defaultTo(0)

      // Desconto aplicado na venda
      table.decimal('desconto', 12, 2).notNullable().defaultTo(0)

      // Valor final pago pelo cliente
      table.decimal('total', 12, 2).notNullable().defaultTo(0)

      // Soma do custo dos produtos vendidos
      table.decimal('custo_total', 12, 2).notNullable().defaultTo(0)

      // total - custo_total
      table.decimal('lucro_bruto', 12, 2).notNullable().defaultTo(0)

      table.string('forma_pagamento').nullable()

      // concluida | cancelada
      table.string('status').notNullable().defaultTo('concluida')

      table.text('observacao').nullable()

      table.timestamps(true, true)

      table.index(['created_at'])
      table.index(['status'])
      table.index(['usuario_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
