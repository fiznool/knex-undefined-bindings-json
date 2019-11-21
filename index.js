const TABLE_NAME = 'knex_bindings_test';

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './mydb.sqlite'
  }
});

main().catch(err => {
  console.error(err);
  process.exit(1);
});

async function main() {
  const hasTable = await knex.schema.hasTable(TABLE_NAME);
  if(!hasTable) {
    await knex.schema.createTable(TABLE_NAME, table => {
      table.string('id').primary();
      table.json('data');
    });
  }

  const insert = knex(TABLE_NAME).insert({
    id: '1',
    data: {
      foo: 'bar',
      baz: undefined
    }
  });

  await knex.raw('?', [insert]);
}
