/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()

  const tasks = [
    'Create the front-end component',
    'Add new task to list when hitting "enter"',
    'Add feature to check-off items',
  ];

  await knex('tasks').insert(
    tasks.map((content) => ({
      content,
    }))
  );
};
