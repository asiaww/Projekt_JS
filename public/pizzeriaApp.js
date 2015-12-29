var app = angular.module('PizzeriaApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("main", {
            url: "/",
            templateUrl: "public/main.html",
            controller: "mainController"
        })
        .state("contact", {
            url: "/contact",
            templateUrl: "public/contact.html",
            controller: "contactController"
        })
        .state('order', {
    	    url: "/order",
            templateUrl: "public/finalizeOrder.html",
            controller: "finalizeOrderController",
            params: {
                order: null,
                basket: null,
                total: 0
            }
        })
        .state('status', {
            url: "/order/:orderid",
            templateUrl: "public/orderStatus.html",
            controller: "orderStatusController"
        });
});

//app.config(["$locationProvider", function ($locationProvider) {
//    $locationProvider.html5Mode(true);
//}]);

app.service("dataFromServer", function($http) {
    
    return {
                getContact: function() {
                    return $http.get("/contact").then(function(res) {
                        return res;
                    });
                },

                getMenu: function() {
                    return $http.get("/menu").then(function(res) {
                        return res;
                    });
                },

                postOrder: function(order) {
                    return $http.post("/order", order).then(function(res) {                        
                        return res;
                    });
                }
    };               
});
