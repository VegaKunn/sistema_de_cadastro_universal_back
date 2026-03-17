import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Categoria from './categoria.ts'

export default class Registro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoriaId: number

  @column()
  declare dadosJson: string

  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>
}
