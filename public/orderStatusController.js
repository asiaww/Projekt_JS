app.controller("orderStatusController", function($scope, $http, $stateParams, dataFromServer){
    $scope.order = {};
    $scope.id = $stateParams.id;
    
    $scope.getOrder = function(id) {
        dataFromServer.getOrder(id).then(function(res) {
                $scope.order = {
                    id: res.data.id,
                    estimated: res.data.estimated.substring(11,16)
                };
            
            });

    };
    
    $scope.getOrder($scope.id);
});
