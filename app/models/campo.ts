import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Categoria from './categoria.ts'

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
  declare tipo: string

  @column()
  declare ordem: number

  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>
}
