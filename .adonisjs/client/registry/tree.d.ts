/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  categorias: {
    index: typeof routes['categorias.index']
    store: typeof routes['categorias.store']
    show: typeof routes['categorias.show']
    update: typeof routes['categorias.update']
    destroy: typeof routes['categorias.destroy']
  }
  campos: {
    store: typeof routes['campos.store']
    get: typeof routes['campos.get']
    destroy: typeof routes['campos.destroy']
  }
  registros: {
    index: typeof routes['registros.index']
    store: typeof routes['registros.store']
    destroy: typeof routes['registros.destroy']
  }
}
