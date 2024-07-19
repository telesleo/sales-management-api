import type { HttpContext } from '@adonisjs/core/http'
import { customerValidator } from '../validators/customer.js'
import Customer from '../models/customer.js'

export default class CustomersController {
  /**
   * Add a new customer
   */
  async store({ request }: HttpContext) {
    const data = request.all()
    const { cpf, name } = await customerValidator.validate(data)
    const customer = await Customer.create({ cpf, name })
    return customer
  }
}
