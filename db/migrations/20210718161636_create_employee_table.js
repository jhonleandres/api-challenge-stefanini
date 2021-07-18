exports.up = function (knex, Promise) {
    return knex.schema.createTable('employee', (table) => {
      table.increments('id').primary()
      table.string('nome', 255)
        .notNullable()
        .unique()
        .index()
      table.string('idade')
      table.string('cargo', 255)
        .notNullable()
      table.integer('companyId').unsigned().notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.foreign('companyId')
        .references('id')
        .inTable('company')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('employee')
};