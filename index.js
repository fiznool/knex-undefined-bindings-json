const TABLE_NAME = 'knex_bindings_test';

const knex = require('knex')({
  client: 'sqlite3',
  connection: ':memory:'
});

async function main() {
  await knex.schema.createTable(TABLE_NAME, table => {
    table.increments('id').primary();
    table.json('data');
  });

  const insert = knex(TABLE_NAME).insert({
    data: {
      foo: 'bar',
      baz: undefined
    }
  });

  await knex.raw('?', [insert]);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
