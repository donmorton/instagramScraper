'use strict';
module.exports = function(app) {
  var User = require('../controllers/instagramController');

  // todoList Routes
  app.route('/tasks')
    .get(User.list_all_tasks)
    .post(User.create_a_task);


  app.route('/tasks/:taskId')
    .get(User.read_a_task)
    .put(User.update_a_task)
    .delete(User.delete_a_task);
};