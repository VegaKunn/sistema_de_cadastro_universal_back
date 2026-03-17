import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Campo from './campo.ts'
import Registro from './registro.ts'

export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare slug: string

  @hasMany(() => Campo)
  declare campos: HasMany<typeof Campo>

  @hasMany(() => Registro)
  declare registros: HasMany<typeof Registro>
}
