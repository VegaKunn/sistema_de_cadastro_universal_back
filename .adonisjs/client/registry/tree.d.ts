/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  categorias: {
    index: typeof routes['categorias.index']
    store: typeof routes['categorias.store']
    show: typeof routes['categorias.show']
    destroy: typeof routes['categorias.destroy']
  }
  campos: {
    index: typeof routes['campos.index']
    store: typeof routes['campos.store']
    destroy: typeof routes['campos.destroy']
  }
  registros: {
    index: typeof routes['registros.index']
    store: typeof routes['registros.store']
    destroy: typeof routes['registros.destroy']
  }
}
