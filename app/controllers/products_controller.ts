import type { HttpContext } from '@adonisjs/core/http'
import { productValidator, productValidatorOptional } from '../validators/product.js'
import Product from '../models/product.js'

export default class ProductsController {
  /**
   * Display a list of products
   */
  async index({}: HttpContext) {
    const products = await Product.query().orderBy('name')
    return products
  }

  /**
   * Show individual product
   */
  async show({ params }: HttpContext) {
    const { id } = params
    const product = await Product.findOrFail(id)
    return product
  }

  /**
   * Update a product
   */
  async update({ request, params }: HttpContext) {
    const { id } = params
    const product = await Product.findOrFail(id)

    const data = await productValidatorOptional.validate(request.all())
    product.merge(data)
    await product.save()

    return product
  }

  /**
   * Add a new product
   */
  async store({ request }: HttpContext) {
    const data = request.all()
    const { name, price, description } = await productValidator.validate(data)
    const product = await Product.create({ name, price, description })
    return product
  }

  /**
   * Delete a product
   */
  async destroy({ params }: HttpContext) {
    const { id } = params
    const product = await Product.findOrFail(id)
    await product.softDelete()
  }
}
