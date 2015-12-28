app.controller("mainController", function($scope, $http, $state, dataFromServer) {

    $scope.menu = [];
    $scope.order = [];
    $scope.total = 0;    

    $scope.getMenu = function() {
        dataFromServer.getMenu().then(function(res) {
            $scope.menu = res.data;
        });
    };

    $scope.addPizzaToOrder = function(name, count, price) {
        if (count > 0) {
            var orderPosition = {
                name: name,            
                count: count,
                price: price  
            };

            $scope.order.push(orderPosition);
            $scope.sumTotal();       
        };
    };

    $scope.removePizzaFromOrder = function(position) {
        var index = $scope.order.indexOf(position);
        $scope.order.splice(index, 1); 
        $scope.sumTotal();
    };

    $scope.sumTotal = function() {
        $scope.total = 0;    
        $scope.order.forEach(function(position) {
            $scope.total = $scope.total + (position.count * position.price);
        });
        $scope.total = $scope.total.toFixed(2);
    };

    $scope.goToFinalizeOrder = function() {
        $state.go("order", { order: $scope.order });
    };

    $scope.instantOrder = function() {
        $scope.addPizzaToOrder(this.position.name, 1, this.position.price);    
        $scope.goToFinalizeOrder();
    }
    
    $scope.getMenu();
});

