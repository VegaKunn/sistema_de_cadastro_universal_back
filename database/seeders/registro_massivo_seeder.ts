import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

import Categoria from '#models/categoria'
import Registro from '#models/registro'

function randomFrom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function randomInt(min: number, max: number) {
  return Math.floor(randomNumber(min, max))
}

export default class extends BaseSeeder {
  public async run() {
    const alimentos = await Categoria.findByOrFail('slug', 'alimentos')
    const bebidas = await Categoria.findByOrFail('slug', 'bebidas')
    const roupas = await Categoria.findByOrFail('slug', 'roupas')
    const pecas = await Categoria.findByOrFail('slug', 'pecas-automotivas')
    const funcionarios = await Categoria.findByOrFail('slug', 'funcionarios')
    const eletronicos = await Categoria.findByOrFail('slug', 'eletronicos')

    const registros: any[] = []

    /* ================= ALIMENTOS ================= */
    const tiposAlimentos = ['Integral', 'Branco', 'Orgânico']
    const embalagens = ['500g', '1kg', '5kg']

    for (let i = 0; i < 300; i++) {
      registros.push({
        categoriaId: alimentos.id,
        sku: `ALM_REAL_${i}`,
        nome: `Alimento ${i}`,
        preco: Number(randomNumber(3, 30).toFixed(2)),
        quantidade: randomInt(50, 300),
        ativo: true,
        marca: randomFrom(['Tio João', 'Camil', 'Nestlé']),
        validade: DateTime.now().plus({ days: randomInt(30, 180) }),
        dadosJson: {
          tipo: randomFrom(tiposAlimentos),
          embalagem: randomFrom(embalagens),
        },
      })
    }

    /* ================= BEBIDAS ================= */
    const volumes = ['350ml', '500ml', '1L', '2L']

    for (let i = 0; i < 300; i++) {
      registros.push({
        categoriaId: bebidas.id,
        sku: `BEB_REAL_${i}`,
        nome: `Bebida ${i}`,
        preco: Number(randomNumber(2, 15).toFixed(2)),
        quantidade: randomInt(100, 500),
        ativo: true,
        marca: randomFrom(['Coca-Cola', 'Pepsi', 'Ambev']),
        validade: DateTime.now().plus({ days: randomInt(60, 365) }),
        dadosJson: {
          volume: randomFrom(volumes),
          tipo: randomFrom(['Gaseificado', 'Natural', 'Alcoólico']),
        },
      })
    }

    /* ================= ROUPAS ================= */
    const tamanhos = ['P', 'M', 'G', 'GG']
    const cores = ['Preto', 'Branco', 'Azul', 'Vermelho']

    for (let i = 0; i < 200; i++) {
      registros.push({
        categoriaId: roupas.id,
        sku: `ROU_REAL_${i}`,
        nome: `Roupa ${i}`,
        preco: Number(randomNumber(50, 300).toFixed(2)),
        quantidade: randomInt(5, 50),
        ativo: true,
        marca: randomFrom(['Nike', 'Adidas', 'Puma']),
        dadosJson: {
          tamanho: randomFrom(tamanhos),
          cor: randomFrom(cores),
        },
      })
    }

    /* ================= PEÇAS ================= */
    for (let i = 0; i < 150; i++) {
      registros.push({
        categoriaId: pecas.id,
        sku: `PEC_REAL_${i}`,
        nome: `Peça ${i}`,
        preco: Number(randomNumber(30, 500).toFixed(2)),
        quantidade: randomInt(5, 40),
        ativo: true,
        marca: randomFrom(['Bosch', 'Moura', 'Valeo']),
        modelo: randomFrom(['Fiat Uno', 'Gol', 'Civic']),
        peso: Number(randomNumber(0.5, 10).toFixed(2)),
        dadosJson: {
          tipo: randomFrom(['Motor', 'Freio', 'Elétrico']),
          aplicacao: randomFrom(['1.0', '1.6', '2.0']),
        },
      })
    }

    /* ================= ELETRÔNICOS ================= */
    for (let i = 0; i < 100; i++) {
      registros.push({
        categoriaId: eletronicos.id,
        sku: `ELE_REAL_${i}`,
        nome: `Eletrônico ${i}`,
        preco: Number(randomNumber(800, 8000).toFixed(2)),
        quantidade: randomInt(1, 20),
        ativo: true,
        marca: randomFrom(['Dell', 'Samsung', 'LG']),
        dadosJson: {
          ram: randomFrom(['4GB', '8GB', '16GB']),
          armazenamento: randomFrom(['128GB', '256GB', '1TB']),
        },
      })
    }

    /* ================= FUNCIONÁRIOS ================= */
    const cargos = [
      { nome: 'Estagiário', salario: [1000, 1500] },
      { nome: 'Instalador', salario: [2000, 3000] },
      { nome: 'RH', salario: [2500, 4000] },
      { nome: 'Gerente', salario: [4000, 8000] },
    ]

    for (let i = 0; i < 50; i++) {
      const cargo = randomFrom(cargos)

      registros.push({
        categoriaId: funcionarios.id,
        sku: `FUNC_REAL_${i}`,
        nome: `Funcionario ${i}`,
        ativo: true,
        dadosJson: {
          cargo: cargo.nome,
          salario: Number(randomNumber(cargo.salario[0], cargo.salario[1]).toFixed(2)),
          dataAdmissao: DateTime.now()
            .minus({ days: randomInt(30, 1500) })
            .toISODate(),
        },
      })
    }

    /* ================= INSERT FINAL ================= */

    await Registro.createMany(registros)
  }
}
