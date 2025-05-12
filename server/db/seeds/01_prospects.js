export async function seed(knex) {
  await knex('prospects').insert([
    {
      id: 1,
      name: 'Joel',
      company: 'open to work',
      email: 'honkytonkrobot@pm.me',
      linkedin: 'linkedin.com/in/honkytonkrobot'
    },
  ])
}
