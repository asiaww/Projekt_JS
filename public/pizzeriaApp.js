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
            controller: "finalizeOrderController"
        })
        .state('status', {
            url: "/status/:orderId",
            templateUrl: "public/orderStatus.html",
            controller: "orderStatusController"
        });
});

app.config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode(true);
}]);
