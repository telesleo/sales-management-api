import type { HttpContext } from '@adonisjs/core/http'
import { addressValidator } from '../validators/address.js'
import Customer from '../models/customer.js'

export default class AddressesController {
  /**
   * Add a new address of a customer
   */
  async store({ request, params }: HttpContext) {
    const { customerId } = params
    const { country, state, city, street, number } = await addressValidator.validate(request.all())
    const customer = await Customer.findOrFail(customerId)
    const address = await customer.related('addresses').create({
      country,
      state,
      city,
      street,
      number,
    })
    return address
  }

  /**
   * Display a list of addresses of a customer
   */
  async index({ params }: HttpContext) {
    const { customerId } = params
    const customer = await Customer.findOrFail(customerId)
    const addresses = await customer.related('addresses').query()
    return addresses
  }
}
