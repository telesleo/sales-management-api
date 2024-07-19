import type { HttpContext } from '@adonisjs/core/http'
import { userValidator } from '../validators/user.js'
import User from '../models/user.js'

export default class UsersController {
  /**
   * Add a new user
   */
  async store({ request }: HttpContext) {
    const data = request.all()
    const { email, password, name } = await userValidator.validate(data)
    const user = await User.create({
      email,
      password,
      name,
    })
    return user
  }
}
