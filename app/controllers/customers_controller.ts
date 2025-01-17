import type { HttpContext } from '@adonisjs/core/http'
import { customerValidator, customerValidatorOptional } from '../validators/customer.js'
import Customer from '../models/customer.js'

export default class CustomersController {
  /**
   * Display a list of customers
   */
  async index({}: HttpContext) {
    const customers = await Customer.query().orderBy('id')
    return customers
  }

  /**
   * Show individual customer
   */
  async show({ request, params }: HttpContext) {
    const { id } = params
    const customer = await Customer.findOrFail(id)

    const { month, year } = request.all()
    await customer.load('addresses')
    await customer.load('phoneNumbers')
    await customer.load('sales', (query) => {
      query
        .preload('product', (productQuery) => {
          productQuery.select(['id', 'name', 'description'])
        })
        .orderBy('created_at', 'desc')

      if (month) {
        query.whereRaw('MONTH(created_at) = ?', [month])
      }
      if (year) {
        query.whereRaw('YEAR(created_at) = ?', [year])
      }
    })

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

    const data = await customerValidatorOptional.validate(request.all())
    customer.merge(data)
    await customer.save()

    return customer
  }

  /**
   * Delete a customer
   */
  async destroy({ params }: HttpContext) {
    const { id } = params
    const customer = await Customer.findOrFail(id)
    await customer.delete()
  }
}
