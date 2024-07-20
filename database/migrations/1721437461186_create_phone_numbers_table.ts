import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'phone_numbers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('customer_id').references('customers.id').unsigned().onDelete('CASCADE')
      table.string('number', 64).notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
