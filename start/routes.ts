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
        router.put('/:id', [controllers.Categorias, 'update']) // 🔥 faltava
        router.delete('/:id', [controllers.Categorias, 'destroy'])

        /* =========================
         * 🔹 CAMPOS POR CATEGORIA
         * ========================= */
        //  router.get('/:categoriaId/campos', [controllers.Campos, 'index'])
      })
      .prefix('/categorias')

    /* =========================
     * 🔸 CAMPOS (GLOBAL)
     * ========================= */
    router.post('/campos', [controllers.Campos, 'store'])
    router.get('/campos', [controllers.Campos, 'get'])
    router.delete('/campos/:id', [controllers.Campos, 'destroy'])

    // ❌ REMOVIDO:
    // router.get('/campos', ...) → não faz sentido com seu controller atual

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
  })
  .prefix('/api/v1')
