import { CampoSchema } from '#database/schema'
import { manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

import Categoria from '#models/categoria'

export default class Campo extends CampoSchema {
  @manyToMany(() => Categoria, {
    pivotTable: 'categoria_campos',
  })
  declare categorias: ManyToMany<typeof Categoria>
}
