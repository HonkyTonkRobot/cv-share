/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('prospects', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('company')
    table.string('email')
    table.string('linkedin')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('prospects')
}
