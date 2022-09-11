exports.up = function (knex) {
    return knex.schema
      .createTable('donations', function (table) {
        table.increments('id');
        table.string('product', 192).notNullable();
        table.string('specification', 192).notNullable();
        table.string('pickup', 192).notNullable();
        table.string('quality', 20).notNullable();
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable("donations");
  };
  
  exports.config = { transaction: false };