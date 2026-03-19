import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

import Campo from '#models/campo'

export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare slug: string

  // 🔥 NOVO: relação com campos
  @manyToMany(() => Campo, {
    pivotTable: 'categoria_campos',
    pivotColumns: ['obrigatorio', 'ordem', 'label_override', 'config_override'],
  })
  declare campos: ManyToMany<typeof Campo>
}
