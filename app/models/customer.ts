import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Address from './address.js'
import PhoneNumber from './phone_number.js'
import Sale from './sale.js'

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

  @hasMany(() => Sale)
  declare sales: HasMany<typeof Sale>

  @hasMany(() => Address)
  declare addresses: HasMany<typeof Address>

  @hasMany(() => PhoneNumber)
  declare phoneNumbers: HasMany<typeof PhoneNumber>
}
