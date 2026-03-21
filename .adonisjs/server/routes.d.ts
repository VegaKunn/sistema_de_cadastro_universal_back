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
  }
  GET: {
    'categorias.index': { paramsTuple?: []; params?: {} }
    'categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campos.get': { paramsTuple?: []; params?: {} }
    'registros.index': { paramsTuple: [ParamValue]; params: {'categoriaId': ParamValue} }
  }
  HEAD: {
    'categorias.index': { paramsTuple?: []; params?: {} }
    'categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campos.get': { paramsTuple?: []; params?: {} }
    'registros.index': { paramsTuple: [ParamValue]; params: {'categoriaId': ParamValue} }
  }
  POST: {
    'categorias.store': { paramsTuple?: []; params?: {} }
    'campos.store': { paramsTuple?: []; params?: {} }
    'registros.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'categorias.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'categorias.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'campos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'registros.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}