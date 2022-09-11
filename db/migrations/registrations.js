exports.up = function (knex) {
  return knex.schema
    .createTable('registrations', function (table) {
      table.string('name', 192).notNullable();
      table.string('email', 192).notNullable().unique();
      table.string('password', 192).notNullable();
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("registrations");
};

exports.config = { transaction: false };