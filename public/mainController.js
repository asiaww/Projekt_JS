app.controller("mainController", function($scope, $http, dataFromServer) {

    $scope.menu = []
    
    $scope.getMenu = function() {
        dataFromServer.getMenu().then(function(res) {
            $scope.menu = res.data;
        });
    };

    $scope.getMenu();
});
