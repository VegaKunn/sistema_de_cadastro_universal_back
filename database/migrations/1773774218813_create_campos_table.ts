import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'campos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // chave interna estável (usada no JSON)
      table.string('nome').notNullable().unique()

      table.string('label').notNullable()

      // mais flexível que enum
      table.string('tipo').notNullable()

      // opções (select, checkbox, etc)
      table.json('opcoes').nullable()

      // config extra (placeholder, validações, etc)
      table.json('config').nullable()

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
