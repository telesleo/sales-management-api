import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Product from './product.js'
import Address from './address.js'
import PhoneNumber from './phone_number.js'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cpf: string

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Product, {
    pivotTable: 'sales',
    pivotTimestamps: true,
  })
  declare sales: ManyToMany<typeof Product>

  @hasMany(() => Address)
  declare addresses: HasMany<typeof Address>

  @hasMany(() => PhoneNumber)
  declare phoneNumbers: HasMany<typeof PhoneNumber>
}
