import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import env from '#start/env'

export default class AuthController {
  /**
   * Handle user login authentication and generate a JWT
   */
  async login({ request }: HttpContext) {
    const data = request.all()
    const { email, password } = data
    const user = await User.verifyCredentials(email, password)
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      env.get('APP_KEY'),
      {
        expiresIn: env.get('JWT_EXPIRE_TIME'),
      }
    )
    return { token }
  }
}
