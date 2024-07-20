import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('customer_id').references('customer.id').unsigned().onDelete('CASCADE')
      table.string('country').notNullable()
      table.string('state').notNullable()
      table.string('city').notNullable()
      table.string('street').notNullable()
      table.integer('number').unsigned().notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
