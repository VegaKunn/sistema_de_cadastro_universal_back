import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CategoriaSeeder extends BaseSeeder {
  public async run() {
    await Categoria.createMany([
      // Supermercado / Alimentos
      { nome: 'Alimentos', slug: 'alimentos' },
      { nome: 'Bebidas', slug: 'bebidas' },
      { nome: 'Higiene', slug: 'higiene' },

      // Roupas / Moda
      { nome: 'Roupas Masculinas', slug: 'roupas-masculinas' },
      { nome: 'Roupas Femininas', slug: 'roupas-femininas' },
      { nome: 'Calçados', slug: 'calcados' },
      { nome: 'Acessórios', slug: 'acessorios' },

      // Eletrônicos / Tecnologia
      { nome: 'Eletrônicos', slug: 'eletronicos' },
      { nome: 'Informática', slug: 'informatica' },
      { nome: 'Smartphones', slug: 'smartphones' },
      { nome: 'Acessórios de TI', slug: 'acessorios-ti' },

      // Automotivo
      { nome: 'Peças Automotivas', slug: 'pecas-automotivas' },
      { nome: 'Lubrificantes', slug: 'lubrificantes' },
      { nome: 'Ferramentas', slug: 'ferramentas' },

      // Escritório / Serviços
      { nome: 'Materiais de Escritório', slug: 'materiais-escritorio' },
      { nome: 'Móveis', slug: 'moveis' },

      // Serviços / Pessoal
      { nome: 'Funcionários', slug: 'funcionarios' },
      { nome: 'Clientes', slug: 'clientes' },
    ])
  }
}
