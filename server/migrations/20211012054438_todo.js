//title  - text
//priority  - integer
//title  - text
exports.up = function(knex) {
    return knex.schema.createTable('todo', (table) =>{
        table.increments();
        table.text('title').notNullable();
        table.integer('priority').notNullable();
        table.text('description').notNullable();
        table.boolean('done').defaultTo(false).notNullable();
        table.datetime('date').notNullable();
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('todo');
};
