app.controller("finalizeOrderController",function($scope, $stateParams, $state, dataFromServer) {
    $scope.order = $stateParams.order;
    $scope.basket = $stateParams.basket;
    $scope.total = $stateParams.total;

    $scope.form = {
        phone: null,
        street: null,
        remarks: null,
    }
    
    $scope.validOrder = false;
    $scope.postFailed = false;

    $scope.phoneNumberValidation = function() {
        var phone = $scope.form.phone;
        var regex = /[0-9]{9}/;
        if (!regex.test(phone)){
            $scope.validOrder = false;
        }
        else {
            $scope.validOrder = true;
        };
    }

    $scope.goToMain = function() {
        $state.go("main");
    };

    $scope.postOrder = function() {
        dataFromServer.postOrder($scope.order).then(function(res) {
            if (status === 500) {
                $scope.postFailed = true;
            }
            else {
                $state.go("status", {id : res.data.id});
            }
        });
    };

});
