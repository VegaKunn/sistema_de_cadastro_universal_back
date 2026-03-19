import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

import Categoria from '#models/categoria'

export default class Campo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  // ❌ REMOVIDO: categoriaId (não existe mais)

  @column()
  declare nome: string

  @column()
  declare label: string

  @column()
  declare tipo: 'texto' | 'numero' | 'decimal' | 'select' | 'checkbox' | 'data' | 'imagem'

  @column({
    prepare: (value) => JSON.stringify(value),
    consume: (value) => (value ? JSON.parse(value) : value),
  })
  declare opcoes: string[] | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // 🔥 NOVO: relação reversa
  @manyToMany(() => Categoria, {
    pivotTable: 'categoria_campos',
  })
  declare categorias: ManyToMany<typeof Categoria>
}
