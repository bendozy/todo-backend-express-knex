exports.up = function (knex) {
  return knex.schema.createTable("todos", function (table) {
    table.increments("id");
    table.string("title");
    table.specificType("order", "serial");
    table.date("deadline");
    table.boolean("completed").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("todos");
};
