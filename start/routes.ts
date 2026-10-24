import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router
  .group(() => {
    /* =========================
     * 📂 CATEGORIAS
     * ========================= */
    router
      .group(() => {
        router.get('/', [controllers.Categorias, 'index'])
        router.post('/', [controllers.Categorias, 'store'])
        router.get('/:id', [controllers.Categorias, 'show'])
        router.put('/:id', [controllers.Categorias, 'update'])
        router.delete('/:id', [controllers.Categorias, 'destroy'])
      })
      .prefix('/categorias')

    /* =========================
     * 🔸 CAMPOS
     * ========================= */
    router.post('/campos', [controllers.Campos, 'store'])
    router.get('/campos', [controllers.Campos, 'get'])
    router.delete('/campos/:id', [controllers.Campos, 'destroy'])

    /* =========================
     * 📦 REGISTROS
     * ========================= */
    router
      .group(() => {
        router.get('/:categoriaId', [controllers.Registros, 'index'])
        router.post('/', [controllers.Registros, 'store'])
        router.delete('/:id', [controllers.Registros, 'destroy'])
      })
      .prefix('/registros')

    /* =========================
     * 💰 VENDAS
     * ========================= */
    router
      .group(() => {
        // Histórico de vendas
        router.get('/', [controllers.Vendas, 'index'])

        // Detalhes de uma venda
        router.get('/:id', [controllers.Vendas, 'show'])

        // Realizar uma nova venda
        router.post('/', [controllers.Vendas, 'store'])
      })
      .prefix('/vendas')

    /* =========================
     * 💸 CUSTOS FIXOS
     * ========================= */
    router
      .group(() => {
        router.get('/', [controllers.CustosFixos, 'index'])
      })
      .prefix('/custos-fixos')

    /* =========================
     * 📊 FINANCEIRO
     * ========================= */
    router
      .group(() => {
        router.get('/resumo', [controllers.Financeiros, 'resumo'])
      })
      .prefix('/financeiro')
  })
  .prefix('/api/v1')
