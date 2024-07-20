import type { HttpContext } from '@adonisjs/core/http'
import { addressValidator, addressValidatorOptional } from '../validators/address.js'
import Address from '../models/address.js'

export default class AddressesController {
  /**
   * Add a new address
   */
  async store({ request }: HttpContext) {
    const data = await addressValidator.validate(request.all())
    const address = Address.create(data)
    return address
  }

  /**
   * Display a list of addresses
   */
  async index({}: HttpContext) {
    const addresses = await Address.all()
    return addresses
  }

  /**
   * Show individual address
   */
  async show({ params }: HttpContext) {
    const { id } = params
    const address = await Address.findOrFail(id)
    return address
  }

  /**
   * Update an address
   */
  async update({ params, request }: HttpContext) {
    const { id } = params
    const address = await Address.findOrFail(id)

    const data = await addressValidatorOptional.validate(request.all())
    address.merge(data)
    await address.save()

    return address
  }

  /**
   * Delete an address
   */
  async destroy({ params }: HttpContext) {
    const { id } = params
    const address = await Address.findOrFail(id)
    await address.delete()
  }
}
