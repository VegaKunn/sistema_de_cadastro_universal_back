/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'categorias.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/categorias',
    tokens: [{"old":"/api/v1/categorias","type":0,"val":"api","end":""},{"old":"/api/v1/categorias","type":0,"val":"v1","end":""},{"old":"/api/v1/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.index']['types'],
  },
  'categorias.store': {
    methods: ["POST"],
    pattern: '/api/v1/categorias',
    tokens: [{"old":"/api/v1/categorias","type":0,"val":"api","end":""},{"old":"/api/v1/categorias","type":0,"val":"v1","end":""},{"old":"/api/v1/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.store']['types'],
  },
  'categorias.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/categorias/:id',
    tokens: [{"old":"/api/v1/categorias/:id","type":0,"val":"api","end":""},{"old":"/api/v1/categorias/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/api/v1/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.show']['types'],
  },
  'categorias.update': {
    methods: ["PUT"],
    pattern: '/api/v1/categorias/:id',
    tokens: [{"old":"/api/v1/categorias/:id","type":0,"val":"api","end":""},{"old":"/api/v1/categorias/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/api/v1/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.update']['types'],
  },
  'categorias.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/categorias/:id',
    tokens: [{"old":"/api/v1/categorias/:id","type":0,"val":"api","end":""},{"old":"/api/v1/categorias/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/api/v1/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.destroy']['types'],
  },
  'campos.store': {
    methods: ["POST"],
    pattern: '/api/v1/campos',
    tokens: [{"old":"/api/v1/campos","type":0,"val":"api","end":""},{"old":"/api/v1/campos","type":0,"val":"v1","end":""},{"old":"/api/v1/campos","type":0,"val":"campos","end":""}],
    types: placeholder as Registry['campos.store']['types'],
  },
  'campos.get': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/campos',
    tokens: [{"old":"/api/v1/campos","type":0,"val":"api","end":""},{"old":"/api/v1/campos","type":0,"val":"v1","end":""},{"old":"/api/v1/campos","type":0,"val":"campos","end":""}],
    types: placeholder as Registry['campos.get']['types'],
  },
  'campos.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/campos/:id',
    tokens: [{"old":"/api/v1/campos/:id","type":0,"val":"api","end":""},{"old":"/api/v1/campos/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/campos/:id","type":0,"val":"campos","end":""},{"old":"/api/v1/campos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['campos.destroy']['types'],
  },
  'registros.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/registros/:categoriaId',
    tokens: [{"old":"/api/v1/registros/:categoriaId","type":0,"val":"api","end":""},{"old":"/api/v1/registros/:categoriaId","type":0,"val":"v1","end":""},{"old":"/api/v1/registros/:categoriaId","type":0,"val":"registros","end":""},{"old":"/api/v1/registros/:categoriaId","type":1,"val":"categoriaId","end":""}],
    types: placeholder as Registry['registros.index']['types'],
  },
  'registros.store': {
    methods: ["POST"],
    pattern: '/api/v1/registros',
    tokens: [{"old":"/api/v1/registros","type":0,"val":"api","end":""},{"old":"/api/v1/registros","type":0,"val":"v1","end":""},{"old":"/api/v1/registros","type":0,"val":"registros","end":""}],
    types: placeholder as Registry['registros.store']['types'],
  },
  'registros.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/registros/:id',
    tokens: [{"old":"/api/v1/registros/:id","type":0,"val":"api","end":""},{"old":"/api/v1/registros/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/registros/:id","type":0,"val":"registros","end":""},{"old":"/api/v1/registros/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['registros.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
