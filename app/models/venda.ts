import { VendaSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import User from '#models/user'
import VendaItem from '#models/venda_item'

export default class Venda extends VendaSchema {
  @belongsTo(() => User, {
    foreignKey: 'usuarioId',
  })
  declare usuario: BelongsTo<typeof User>

  @hasMany(() => VendaItem, {
    foreignKey: 'vendaId',
  })
  declare itens: HasMany<typeof VendaItem>
}
