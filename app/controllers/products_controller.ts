import type { HttpContext } from '@adonisjs/core/http'
import { productValidator } from '../validators/product.js'
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
   * Add a new product
   */
  async store({ request }: HttpContext) {
    const data = request.all()
    const { name, price, description } = await productValidator.validate(data)
    const product = await Product.create({ name, price, description })
    return product
  }
}
