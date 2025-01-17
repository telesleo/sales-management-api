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
import ProductsController from '../app/controllers/products_controller.js'
import SalesController from '../app/controllers/sales_controller.js'
import AddressesController from '../app/controllers/addresses_controller.js'
import PhoneNumbersController from '../app/controllers/phone_numbers_controller.js'
import { middleware } from './kernel.js'

router.post('/signup', [UsersController, 'store'])
router.post('/login', [AuthController, 'login'])
router
  .group(() => {
    router.resource('/customers', CustomersController)
    router.resource('/products', ProductsController)
    router.resource('/sales', SalesController)
    router.resource('/addresses', AddressesController)
    router.resource('/phone-numbers', PhoneNumbersController)
  })
  .use(middleware.auth())
