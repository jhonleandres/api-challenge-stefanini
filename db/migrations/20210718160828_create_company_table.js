exports.up = function (knex, Promise) {
    return knex.schema.createTable('company', (table) => {
      table.increments('id').primary();
      table.string('razao_social', 255)
        .notNullable()
        .unique()
        .index();
      table.string('nome_fantasia', 255)
        .notNullable()
        .index();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('company');
};