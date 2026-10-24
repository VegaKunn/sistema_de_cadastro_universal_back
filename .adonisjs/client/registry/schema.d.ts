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
  'vendas.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/vendas'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vendas_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vendas_controller').default['index']>>>
    }
  }
  'vendas.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/vendas/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vendas_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vendas_controller').default['show']>>>
    }
  }
  'vendas.store': {
    methods: ["POST"]
    pattern: '/api/v1/vendas'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vendas_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vendas_controller').default['store']>>>
    }
  }
  'custos_fixos.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/custos-fixos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['index']>>>
    }
  }
  'custos_fixos.store': {
    methods: ["POST"]
    pattern: '/api/v1/custos-fixos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['store']>>>
    }
  }
  'custos_fixos.update': {
    methods: ["PUT"]
    pattern: '/api/v1/custos-fixos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['update']>>>
    }
  }
  'custos_fixos.alterar_status': {
    methods: ["PATCH"]
    pattern: '/api/v1/custos-fixos/:id/ativo'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['alterarStatus']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['alterarStatus']>>>
    }
  }
  'custos_fixos.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/custos-fixos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/custos_fixos_controller').default['destroy']>>>
    }
  }
  'financeiros.resumo': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/financeiro/resumo'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/financeiros_controller').default['resumo']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/financeiros_controller').default['resumo']>>>
    }
  }
}
