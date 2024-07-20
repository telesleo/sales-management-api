import type { HttpContext } from '@adonisjs/core/http'
import { phoneNumberValidator, phoneNumberValidatorOptional } from '../validators/phone_number.js'
import PhoneNumber from '../models/phone_number.js'

export default class PhoneNumbersController {
  /**
   * Display a list of phone numbers
   */
  async index({}: HttpContext) {
    const phoneNumbers = await PhoneNumber.all()
    return phoneNumbers
  }

  /**
   * Add a new phone number
   */
  async store({ request }: HttpContext) {
    const data = await phoneNumberValidator.validate(request.all())
    const phoneNumber = PhoneNumber.create(data)
    return phoneNumber
  }

  /**
   * Update a phone number
   */
  async update({ params, request }: HttpContext) {
    const { id } = params
    const phoneNumber = await PhoneNumber.findOrFail(id)

    const data = await phoneNumberValidatorOptional.validate(request.all())
    phoneNumber.merge(data)
    await phoneNumber.save()

    return phoneNumber
  }

  /**
   * Delete a phone number
   */
  async destroy({ params }: HttpContext) {
    const { id } = params
    const phoneNumber = await PhoneNumber.findOrFail(id)
    await phoneNumber.delete()
  }
}
