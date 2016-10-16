myapp.controller("homeCtrl",function($scope){
    $scope.List=[
        {title:"美食",imgSrc:"images/home/icon1.png"},
        {title:"饮料",imgSrc:"images/home/icon2.png"},
        {title:"超市",imgSrc:"images/home/icon3.png"},
        {title:"果蔬",imgSrc:"images/home/icon4.png"},
        {title:"今日推荐",imgSrc:"images/home/icon5.png"},
        {title:"排行榜",imgSrc:"images/home/icon6.png"},
        {title:"猜你喜欢",imgSrc:"images/home/icon7.png"},
        {title:"食友推荐",imgSrc:"images/home/icon8.png"}
    ];

    $scope.star=5;
    $scope.showStar=function(star){
        var num=[];
        for(var i=0;i<star;i++){
            num.push(i);
        }
        return num;
    }

});
