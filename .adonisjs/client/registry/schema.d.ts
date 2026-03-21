/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'categorias.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/categorias'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['index']>>>
    }
  }
  'categorias.store': {
    methods: ["POST"]
    pattern: '/api/v1/categorias'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['store']>>>
    }
  }
  'categorias.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['show']>>>
    }
  }
  'categorias.update': {
    methods: ["PUT"]
    pattern: '/api/v1/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['update']>>>
    }
  }
  'categorias.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['destroy']>>>
    }
  }
  'campos.store': {
    methods: ["POST"]
    pattern: '/api/v1/campos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campos_controller').default['store']>>>
    }
  }
  'campos.get': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/campos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campos_controller').default['get']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campos_controller').default['get']>>>
    }
  }
  'campos.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/campos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/campos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/campos_controller').default['destroy']>>>
    }
  }
  'registros.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/registros/:categoriaId'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { categoriaId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/registros_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/registros_controller').default['index']>>>
    }
  }
  'registros.store': {
    methods: ["POST"]
    pattern: '/api/v1/registros'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/registros_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/registros_controller').default['store']>>>
    }
  }
  'registros.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/registros/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/registros_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/registros_controller').default['destroy']>>>
    }
  }
}
