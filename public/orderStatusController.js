app.controller("orderStatusController", function($scope, $http, $stateParams, dataFromServer){
    $scope.order = {};
    $scope.id = $stateParams.id;
    
    $scope.getOrder = function(id) {
        dataFromServer.getOrder(id).then(function(res) {
                console.log(res.data);
                $scope.order = {
                    id: res.data.id,
                    estimated: res.data.estimated
                };
            
                console.log($scope.order.estimated);

            });

    };
    
    $scope.getOrder($scope.id);
});
