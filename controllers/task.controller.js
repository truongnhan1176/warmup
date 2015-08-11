var taskModel = require('../models/task.model.js');

exports.getTasks = function(req, res) {
    taskModel.find(function(err, tasks) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(tasks); // return all todos in JSON format
        });
   
};

exports.postTask = function(req, res) {
 		

 		console.log(req.body.note);
        taskModel.create({
            notes : req.body.note,
            is_done : false,
            date_created:Date.now()
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            taskModel.find(function(err, tasks) {
                if (err)
                    res.send(err)
                res.json(tasks);
            });
        });

  
   
};

exports.deleteTask = function(req, res) {
 
        taskModel.remove({
            _id : req.params.task_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            taskModel.find(function(err, tasks) {
                if (err)
                    res.send(err)
                res.json(tasks);
            });
        });

  
   
};
exports.editTask = function(req, res) {
 
 		console.log(req.body.editnote);
        taskModel.update({'_id':req.body._id},{$set:{'notes':req.body.editnote}}
        , function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            taskModel.find(function(err, tasks) {
                if (err)
                    res.send(err)
                res.json(tasks);
            });
        });

  
   
};
exports.editstatusTask = function(req, res) {
 
 		console.log(req.body.editstatus);
        taskModel.update({'_id':req.body._id},{$set:{'is_done':req.body.editstatus}}
        , function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            taskModel.find(function(err, tasks) {
                if (err)
                    res.send(err)
                res.json(tasks);
            });
        });

  
   
};



