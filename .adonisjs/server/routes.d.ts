import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'categorias.index': { paramsTuple?: []; params?: {} }
    'categorias.store': { paramsTuple?: []; params?: {} }
    'categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campos.store': { paramsTuple?: []; params?: {} }
    'campos.get': { paramsTuple?: []; params?: {} }
    'campos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'registros.index': { paramsTuple: [ParamValue]; params: {'categoriaId': ParamValue} }
    'registros.store': { paramsTuple?: []; params?: {} }
    'registros.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'vendas.index': { paramsTuple?: []; params?: {} }
    'vendas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'vendas.store': { paramsTuple?: []; params?: {} }
    'custos_fixos.index': { paramsTuple?: []; params?: {} }
    'custos_fixos.store': { paramsTuple?: []; params?: {} }
    'custos_fixos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'custos_fixos.alterar_status': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'custos_fixos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'financeiros.resumo': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'categorias.index': { paramsTuple?: []; params?: {} }
    'categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campos.get': { paramsTuple?: []; params?: {} }
    'registros.index': { paramsTuple: [ParamValue]; params: {'categoriaId': ParamValue} }
    'vendas.index': { paramsTuple?: []; params?: {} }
    'vendas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'custos_fixos.index': { paramsTuple?: []; params?: {} }
    'financeiros.resumo': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'categorias.index': { paramsTuple?: []; params?: {} }
    'categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campos.get': { paramsTuple?: []; params?: {} }
    'registros.index': { paramsTuple: [ParamValue]; params: {'categoriaId': ParamValue} }
    'vendas.index': { paramsTuple?: []; params?: {} }
    'vendas.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'custos_fixos.index': { paramsTuple?: []; params?: {} }
    'financeiros.resumo': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'categorias.store': { paramsTuple?: []; params?: {} }
    'campos.store': { paramsTuple?: []; params?: {} }
    'registros.store': { paramsTuple?: []; params?: {} }
    'vendas.store': { paramsTuple?: []; params?: {} }
    'custos_fixos.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'categorias.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'custos_fixos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'categorias.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'registros.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'custos_fixos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'custos_fixos.alterar_status': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}