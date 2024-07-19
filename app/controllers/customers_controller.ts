import type { HttpContext } from '@adonisjs/core/http'
import { customerValidator, customerValidatorOptional } from '../validators/customer.js'
import Customer from '../models/customer.js'

export default class CustomersController {
  /**
   * Display a list of customers
   */
  async index({}: HttpContext) {
    const customers = await Customer.all()
    return customers
  }

  /**
   * Show individual customer
   */
  async show({ params }: HttpContext) {
    const { id } = params
    const customer = await Customer.findOrFail(id)
    return customer
  }

  /**
   * Add a new customer
   */
  async store({ request }: HttpContext) {
    const data = request.all()
    const { cpf, name } = await customerValidator.validate(data)
    const customer = await Customer.create({ cpf, name })
    return customer
  }

  /**
   * Update a customer
   */
  async update({ params, request }: HttpContext) {
    const { id } = params
    const customer = await Customer.findOrFail(id)

    const data = request.all()
    const { cpf, name } = await customerValidatorOptional.validate(data)

    if (cpf) {
      customer.cpf = cpf
    }
    if (name) {
      customer.name = name
    }

    const newCustomer = await customer.save()
    return newCustomer
  }
}
