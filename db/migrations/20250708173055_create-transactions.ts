import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(`transactions`, (table) => {
    table.uuid(`id`).primary().defaultTo(knex.fn.uuid())
    table.text(`title`).notNullable()
    table.decimal(`amount`, 10, 2).notNullable()
    table.timestamp(`created_at`).defaultTo(knex.fn.now()).notNullable()
  })
} // o que será executado quando a migration for aplicada

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(`transactions`)
}
