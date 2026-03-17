import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router
  .group(() => {
    /* GROUP CATEGORIAS */
    router
      .group(() => {
        router.get('/', [controllers.Categorias, 'index'])
        router.post('/', [controllers.Categorias, 'store'])
        router.get('/:id', [controllers.Categorias, 'show'])
        router.delete('/:id', [controllers.Categorias, 'destroy'])

        /* SUBGROUP CAMPOS */
        router
          .group(() => {
            router.get('/', [controllers.Campos, 'index'])
          })
          .prefix('/:categoriaId/campos')
      })
      .prefix('/categorias')

    /* GROUP CAMPOS ROOT */
    router.post('/campos', [controllers.Campos, 'store'])
    router.delete('/campos/:id', [controllers.Campos, 'destroy'])

    /* GROUP REGISTROS */
    router
      .group(() => {
        router.get('/:categoriaId', [controllers.Registros, 'index'])
        router.post('/', [controllers.Registros, 'store'])
        router.delete('/:id', [controllers.Registros, 'destroy'])
      })
      .prefix('/registros')
  })
  .prefix('/api/v1')
