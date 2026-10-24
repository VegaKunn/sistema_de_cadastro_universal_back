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
  'vendas.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/vendas',
    tokens: [{"old":"/api/v1/vendas","type":0,"val":"api","end":""},{"old":"/api/v1/vendas","type":0,"val":"v1","end":""},{"old":"/api/v1/vendas","type":0,"val":"vendas","end":""}],
    types: placeholder as Registry['vendas.index']['types'],
  },
  'vendas.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/vendas/:id',
    tokens: [{"old":"/api/v1/vendas/:id","type":0,"val":"api","end":""},{"old":"/api/v1/vendas/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/vendas/:id","type":0,"val":"vendas","end":""},{"old":"/api/v1/vendas/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['vendas.show']['types'],
  },
  'vendas.store': {
    methods: ["POST"],
    pattern: '/api/v1/vendas',
    tokens: [{"old":"/api/v1/vendas","type":0,"val":"api","end":""},{"old":"/api/v1/vendas","type":0,"val":"v1","end":""},{"old":"/api/v1/vendas","type":0,"val":"vendas","end":""}],
    types: placeholder as Registry['vendas.store']['types'],
  },
  'custos_fixos.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/custos-fixos',
    tokens: [{"old":"/api/v1/custos-fixos","type":0,"val":"api","end":""},{"old":"/api/v1/custos-fixos","type":0,"val":"v1","end":""},{"old":"/api/v1/custos-fixos","type":0,"val":"custos-fixos","end":""}],
    types: placeholder as Registry['custos_fixos.index']['types'],
  },
  'custos_fixos.store': {
    methods: ["POST"],
    pattern: '/api/v1/custos-fixos',
    tokens: [{"old":"/api/v1/custos-fixos","type":0,"val":"api","end":""},{"old":"/api/v1/custos-fixos","type":0,"val":"v1","end":""},{"old":"/api/v1/custos-fixos","type":0,"val":"custos-fixos","end":""}],
    types: placeholder as Registry['custos_fixos.store']['types'],
  },
  'custos_fixos.update': {
    methods: ["PUT"],
    pattern: '/api/v1/custos-fixos/:id',
    tokens: [{"old":"/api/v1/custos-fixos/:id","type":0,"val":"api","end":""},{"old":"/api/v1/custos-fixos/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/custos-fixos/:id","type":0,"val":"custos-fixos","end":""},{"old":"/api/v1/custos-fixos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['custos_fixos.update']['types'],
  },
  'custos_fixos.alterar_status': {
    methods: ["PATCH"],
    pattern: '/api/v1/custos-fixos/:id/ativo',
    tokens: [{"old":"/api/v1/custos-fixos/:id/ativo","type":0,"val":"api","end":""},{"old":"/api/v1/custos-fixos/:id/ativo","type":0,"val":"v1","end":""},{"old":"/api/v1/custos-fixos/:id/ativo","type":0,"val":"custos-fixos","end":""},{"old":"/api/v1/custos-fixos/:id/ativo","type":1,"val":"id","end":""},{"old":"/api/v1/custos-fixos/:id/ativo","type":0,"val":"ativo","end":""}],
    types: placeholder as Registry['custos_fixos.alterar_status']['types'],
  },
  'custos_fixos.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/custos-fixos/:id',
    tokens: [{"old":"/api/v1/custos-fixos/:id","type":0,"val":"api","end":""},{"old":"/api/v1/custos-fixos/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/custos-fixos/:id","type":0,"val":"custos-fixos","end":""},{"old":"/api/v1/custos-fixos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['custos_fixos.destroy']['types'],
  },
  'financeiros.resumo': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/financeiro/resumo',
    tokens: [{"old":"/api/v1/financeiro/resumo","type":0,"val":"api","end":""},{"old":"/api/v1/financeiro/resumo","type":0,"val":"v1","end":""},{"old":"/api/v1/financeiro/resumo","type":0,"val":"financeiro","end":""},{"old":"/api/v1/financeiro/resumo","type":0,"val":"resumo","end":""}],
    types: placeholder as Registry['financeiros.resumo']['types'],
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
