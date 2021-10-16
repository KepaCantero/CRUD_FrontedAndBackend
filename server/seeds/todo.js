
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
        const todos = [{
          title: 'Build a CRUD App',
          description: 'this is a description',
          priority: 1,
          date: new Date()
        },
        {
          title: 'Do the dishes',
          description: 'this is a description',
          priority: 3,
          date: new Date()
        },
        {
          title: 'Render a view',
          description: 'this is a description',
          priority: 2,
          date: new Date()
        },
        {
          title: 'Walk the dog',
          description: 'this is a description',
          priority: 2,
          date: new Date()
        }];
        return knex('todo').insert(todos);
    });
};
