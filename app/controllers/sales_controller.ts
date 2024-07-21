import type { HttpContext } from '@adonisjs/core/http'
import { saleValidator } from '../validators/sale.js'
import Sale from '../models/sale.js'
import Product from '../models/product.js'

export default class SalesController {
  /**
   * Add a new sale
   */
  async store({ request }: HttpContext) {
    const data = request.all()
    const { customerId, productId, amount } = await saleValidator.validate(data)
    const product = await Product.findOrFail(productId)
    const unitPrice = product.price
    const sale = await Sale.create({ customerId, productId, amount, unitPrice })
    return sale
  }
}
