var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    }).state("home",{
        url:"/home",
        templateUrl:"views/home/home.html",
        controller:"homeCtrl"
    }).state("me",{
        url:"/me",
        templateUrl:"views/me/me.html",
        controller:"meCtrl"
    }).state("location",{
        url:"/location",
        templateUrl:"views/location/location.html",
        controller:"locationCtrl"
    }).state("member",{
        url:"/member",
        templateUrl:"views/member/member.html",
        controller:"memberCtrl"
    });



    $urlRouterProvider.otherwise('/tour')
});
myapp.controller("myCtrl",function($scope){});