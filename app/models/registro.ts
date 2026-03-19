import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Categoria from '#models/categoria'

export default class Registro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  // FK para categoria
  @column()
  declare categoriaId: number

  // Dados dinâmicos da categoria
  @column({
    prepare: (value) => JSON.stringify(value),
    consume: (value) => (value ? JSON.parse(value) : value),
  })
  declare dadosJson: Record<string, any>

  // Campos universais
  @column()
  declare sku: string

  @column()
  declare nome: string

  @column()
  declare preco: number | null

  @column()
  declare quantidade: number

  @column()
  declare ativo: boolean

  @column()
  declare tags: string | null // JSON string

  @column()
  declare marca: string | null

  @column()
  declare modelo: string | null

  @column()
  declare peso: number | null

  @column()
  declare unidade: string | null

  @column.date()
  declare validade: DateTime | null

  @column()
  declare codigoBarra: string | null

  @column()
  declare imagem: string | null

  @column()
  declare createdBy: number | null

  @column()
  declare updatedBy: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamento com categoria
  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>
}
