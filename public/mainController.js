app.controller("mainController", function($scope, $http, $state, dataFromServer) {

    $scope.menu = [];
    $scope.order = [];
    $scope.basket = [];
    $scope.total = 0;    

    $scope.getMenu = function() {
        dataFromServer.getMenu().then(function(res) {
            $scope.menu = res.data;
        });
    };

    $scope.addPizzaToOrder = function(id, name, count, price) {
        var flag = true;        
        if (count > 0) {
	        $scope.basket.forEach(function(position) {            
                if (position.name === name) {
                    position.count = position.count + count;
                    flag = false;
                };
            });
            $scope.order.forEach(function(position) {
                if (position.name === name) {
                    position.quantity = position.quantity + count;
                    flag = false;
                };
            });
            if (flag) {	        
                var basketPosition = {
                    id: id,
                    name: name,            
                    count: count,
                    price: price  
                };
                var orderPosition = {
                    id: id,
                    quantity: count,
                };
                $scope.basket.push(basketPosition);
                $scope.order.push(orderPosition);
            }             
            $scope.sumTotal();
        }
    };

    $scope.removePizzaFromOrder = function(position) {
        var index = $scope.basket.indexOf(position);
        $scope.basket.splice(index, 1);
        $scope.order.splice(index, 1); 
        $scope.sumTotal();
    };

    $scope.editCount = function() {
        return true;
    }

    $scope.sumTotal = function() {
        $scope.total = 0;    
        $scope.basket.forEach(function(position) {
            $scope.total = $scope.total + (position.count * position.price);
        });
        $scope.total = $scope.total.toFixed(2);
    };

    $scope.goToFinalizeOrder = function() {
        $state.go("order", { order: $scope.order, basket: $scope.basket, total: $scope.total });
    };

    $scope.instantOrder = function() {
        $scope.order = [];
        $scope.basket = [];
        $scope.addPizzaToOrder(this.position.id, this.position.name, 1, this.position.price);    
        $scope.goToFinalizeOrder();
    }
    
    $scope.getMenu();
});

