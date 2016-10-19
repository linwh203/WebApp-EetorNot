var myapp=angular.module("myapp",["ionic"]);



myapp.config(function($stateProvider,$urlRouterProvider){

    $stateProvider.state("tour",{
        url:"/tour",
        //templateUrl:"views/tour/tour.html",
        //controller:"tourCtrl"
        views:{
            "all":{templateUrl:"views/tour/tour.html", controller:"tourCtrl"}
        }
    }).state("tabs",{
        url:"/tabs",
        abstract:true,
        //templateUrl:"views/tabs/tabs.html",
        //controller:"tabsCtrl"
        views:{
            "all":{templateUrl:"views/tabs/tabs.html", controller:"tabsCtrl"}
        }
    }).state("tabs.home",{
        url:"/home",
        views:{
            "tab-home":{templateUrl:'views/home/home.html',controller:'homeCtrl'}
        }
    }).state("tabs.order",{
        url:"/order",
        views:{
            "tab-order":{templateUrl:'views/order/order.html',controller:'orderCtrl'}
        }
    }).state("tabs.cart",{
        url:"/cart",
        views:{
            "tab-cart":{templateUrl:'views/cart/cart.html',controller:'cartCtrl'}
        }
    }).state("tabs.sort",{
        url:"/sort",
        views:{
            "tab-sort":{templateUrl:'views/sort/sort.html',controller:''}
        }
    }).state("tabs.me",{
        url:"/me",
        views:{
            "tab-user":{templateUrl:'views/me/me.html',controller:'meCtrl'}
        }
    }).state("setting",{
        url:"/setting",
        views:{
            "all":{templateUrl:"views/setting/setting.html"}
        }
    }).state("location",{
        url:"/location",
        views:{
            "all":{templateUrl:"views/location/location.html",controller:"locationCtrl"}
        }
    }).state("member",{
        url:"/member",
        views:{
            "all":{templateUrl:"views/member/member.html",controller:"memberCtrl"}
        }
    }).state("userInfo",{
        url:"/userInfo",
        views:{
            "all":{templateUrl:"views/userInfo/userInfo.html",controller:"userInfoCtrl"}
        }
    }).state("business",{
        url:"/business?:id",
        views:{
            "all":{templateUrl:"views/business/business.html",controller:"businessCtrl"}
        }
    });



    $urlRouterProvider.otherwise('/tour')
}).config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.android.tabs.style('standard');
});







myapp.factory("myFactory",['$http',function($http){
    var data={res:[]};
    $http.get('data/restData.json').success(function(response){
        data.res=response;
    });
    return {
        query:function(){return data}
    };
}]);

myapp.controller('myCtrl',function($scope,$state,$ionicNavBarDelegate,$ionicHistory,$ionicViewSwitcher,myFactory){
    $scope.data=myFactory.query();
    //console.log($scope.data);
    $scope.to = function(lujing){
        $state.go(lujing);
    };
    $scope.goback = function(){
        //$ionicNavBarDelegate.back();

        //$ionicHistory.goBack()
        //var state = $ionicHistory.backView().url;
        //return state;
        //window.location.hash = $ionicHistory.backView().url

        //console.log($ionicHistory.backView())
        $state.go($ionicHistory.backView().stateId);
        $ionicViewSwitcher.nextDirection("back");
    }

    $scope.showStar = function(star){
        var num=[];
        for(var i=0;i<star;i++){
            num.push(i);
        }
        return num;
    }

    $scope.sellNum=function(menu){
        var count = 0;
        for(var i=0;i<menu.length;i++){
            count+=menu[i].saleNumMonth;
        };
        return count;
    }

    $scope.toBusniness = function(res){
        $state.go("business",{id:res.restId});

        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };




    //-----------------------------购物车列表
    $scope.cartList=[
        {
            name:"肯德基",
            imgSrc:"images/shopcar/kfcicon.png",
            checked:true,
            menu:[
                {
                    menuName:"肯德基全家桶",
                    menuSrc:"images/shopcar/kfctong.jpg",
                    count:1,
                    star:5,
                    sellNum:126,
                    price:89,
                    checked:true
                },
                {
                    menuName:"香辣鸡腿堡",
                    menuSrc:"images/res/kfc/01.jpg",
                    count:1,
                    star:5,
                    sellNum:130,
                    price:12.5,
                    checked:true
                }

            ]
        }
        //{
        //    name:"沙县小吃",
        //    imgSrc:"images/shopcar/shaxianicon.png",
        //    checked:false,
        //    menu:[
        //        {
        //            menuName:"肉末汤面",
        //            menuSrc:"images/shopcar/shaxianmian.jpg",
        //            count:2,
        //            star:4,
        //            sellNum:25,
        //            price:15,
        //            checked:false
        //        }
        //    ]
        //}
    ];
    //----------------------购物车列表截止


    //----------------判定是否存在于购物车
    $scope.allCost = function(res){
        var cost = 0;
        angular.forEach($scope.cartList, function (item) {
            if (item.name == res.restName) {
                for( var i=0; i<item.menu.length ; i++ ){
                    cost += item.menu[i].price*item.menu[i].count;
                }
            };
        });
        return cost;
    }


})

myapp.filter('type',function(){
    return function(res,number){
        var nav=[];
        for(var i=0 ; i<res.length ; i++){
            for( var j=0; j<res[i].type.length ; j++){
                if(res[i].type[j] == number || number==0 ){
                    nav.push(res[i]);
                    break;
                };
            };
        };
        return nav;
    }
})

myapp.filter('category',function(){
    return function(menu,checked){
        var nav=[];
        //console.log(menu)
        for(var i=0 ; i<menu.length ; i++){
            for( var j=0 ; j<menu[i].category.length ; j++){
                if(menu[i].category[j] == checked ){
                    nav.push(menu[i]);
                    break;
                }
            }
        };
        return nav;
    }
})