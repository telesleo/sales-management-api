import type { HttpContext } from '@adonisjs/core/http'
import { phoneNumberValidator } from '../validators/phone_number.js'
import Customer from '../models/customer.js'

export default class PhoneNumbersController {
  /**
   * Add a new client phone number
   */
  async store({ request, params }: HttpContext) {
    const { customerId } = params
    const customer = await Customer.findOrFail(customerId)

    const data = request.all()
    const { number } = await phoneNumberValidator.validate(data)
    const phoneNumber = await customer.related('phoneNumbers').create({ number })

    return phoneNumber
  }
}
