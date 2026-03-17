import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'registros'

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
        .notNullable()

      // Dados dinâmicos do produto (campos específicos da categoria)
      table.json('dados_json').notNullable()

      // Campos padrão para qualquer registro
      table.string('sku').notNullable().unique() // Código único
      table.string('nome').notNullable() // Nome do produto
      table.decimal('preco', 12, 2).nullable() // Preço
      table.integer('quantidade').defaultTo(0) // Estoque
      table.boolean('ativo').defaultTo(true) // Status ativo/inativo
      table.json('tags').nullable() // Tags para filtros rápidos
      table.string('marca').nullable() // Marca / fabricante
      table.string('modelo').nullable() // Modelo / referência
      table.decimal('peso', 10, 2).nullable() // Peso
      table.string('unidade', 10).nullable() // Unidade de medida
      table.date('validade').nullable() // Apenas produtos perecíveis
      table.string('codigo_barra').nullable() // UPC/EAN
      table.string('imagem').nullable() // URL ou caminho da imagem
      table.integer('created_by').nullable() // FK usuário que criou
      table.integer('updated_by').nullable() // FK usuário que atualizou

      table.timestamps(true, true) // created_at e updated_at com timezone
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
