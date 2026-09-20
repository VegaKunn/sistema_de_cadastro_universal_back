import { VendaItenSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Venda from '#models/venda'
import Registro from '#models/registro'

export default class VendaItem extends VendaItenSchema {
  @belongsTo(() => Venda, {
    foreignKey: 'vendaId',
  })
  declare venda: BelongsTo<typeof Venda>

  @belongsTo(() => Registro, {
    foreignKey: 'registroId',
  })
  declare registro: BelongsTo<typeof Registro>
}
