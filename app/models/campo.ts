import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Categoria from '#models/categoria'

export default class Campo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoriaId: number

  @column()
  declare nome: string

  @column()
  declare label: string

  @column()
  declare tipo: 'texto' | 'numero' | 'decimal' | 'select' | 'checkbox' | 'data' | 'imagem'

  @column()
  declare obrigatorio: boolean

  @column()
  declare ordem: number

  @column()
  declare opcoes: string | null // JSON string para selects ou checkboxes

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamento
  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>
}
