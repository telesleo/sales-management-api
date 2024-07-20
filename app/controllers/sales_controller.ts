import type { HttpContext } from '@adonisjs/core/http'
import { saleValidator } from '../validators/sale.js'
import Customer from '../models/customer.js'

export default class SalesController {
  /**
   * Display a list of phone numbers of a client
   */
  async index({ params }: HttpContext) {
    const { customerId } = params
    const customer = await Customer.findOrFail(customerId)
    await customer.load('phoneNumbers')
    return customer.phoneNumbers
  }

  /**
   * Add a new sale
   */
  async store({ request }: HttpContext) {
    const data = request.all()
    const { customerId, productId, amount } = await saleValidator.validate(data)
    const customer = await Customer.findOrFail(customerId)
    await customer.related('sales').attach({ [productId]: { amount } })
  }
}
