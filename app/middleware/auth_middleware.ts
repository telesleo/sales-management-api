import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import jwt from 'jsonwebtoken'
import env from '#start/env'
import UnauthenticatedException from '../exceptions/unauthenticated_exception.js'
import User from '../models/user.js'

export default class AuthMiddleware {
  /**
   * Check for a valid JWT in the authorization header
   */
  async handle({ request }: HttpContext, next: NextFn) {
    const token = request.headers().authorization as string

    try {
      const user = jwt.verify(token, env.get('APP_KEY')) as User
      request.user = user
    } catch (error) {
      throw new UnauthenticatedException()
    }

    return next()
  }
}
