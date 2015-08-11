var express = require('express');
var router = express.Router();
var taskController = require("../controllers/task.controller");
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('pages/index', { title: 'Express' });
});

router.get('/api/tasks', function(req, res, next) {
	
  taskController.getTasks(req, res);
});
router.post('/api/post', function(req, res, next) {
	
  taskController.postTask(req, res);
});
router.post('/api/edit', function(req, res, next) {
	
  taskController.editTask(req, res);
});
router.post('/api/editstatus', function(req, res, next) {
	
  taskController.editstatusTask(req, res);
});
router.delete('/api/tasks/:task_id', function(req, res) {
	
  taskController.deleteTask(req, res);
});

module.exports = router;
