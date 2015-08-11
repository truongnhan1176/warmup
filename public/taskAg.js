var renTask = angular.module('renTask', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all tasks and show them
    $http.get('/api/tasks')
        .success(function(data) {
            $scope.tasks = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createTodo = function() {
        $http.post('/api/post', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                $scope.tasks = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteTodo = function(id) {
        $http.delete('/api/tasks/' + id)
            .success(function(data) {
                $scope.tasks = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
     $scope.editTodo = function(id) {
        $scope.formData._id=id;
        $http.post('/api/edit', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                $scope.tasks = data;
                 $scope.formData.editnote="";
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.editstatusTodo = function(id,status) {
        $scope.formData._id=id;
        $scope.formData.editstatus=status;
        console.log( $scope.formData);
        $http.post('/api/editstatus', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                $scope.tasks = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.show = function(status) {
        $scope.show=status;
        alert(status);
       
    };

}