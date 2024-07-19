import User from '../app/models/user.js'

declare module '@adonisjs/core/http' {
  export interface Request {
    user: User
  }
}
