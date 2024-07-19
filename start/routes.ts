/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '../app/controllers/users_controller.js'
import AuthController from '../app/controllers/auth_controller.js'
import CustomersController from '../app/controllers/customers_controller.js'
import { middleware } from './kernel.js'

router
  .group(() => {
    router.resource('/customers', CustomersController)
  })
  .use(middleware.auth())
router.post('/users', [UsersController, 'store'])
router.post('/login', [AuthController, 'login'])
