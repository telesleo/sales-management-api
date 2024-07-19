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

router.resource('/users', UsersController)
router.post('/login', [AuthController, 'login'])
