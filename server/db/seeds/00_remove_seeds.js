export const seed = async function(knex) {
  await knex('prospects').del()
}
