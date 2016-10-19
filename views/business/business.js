myapp.controller("businessCtrl",function($scope,$stateParams,myFactory){
    var nowId = $stateParams.id;

    // 查询出来要显示在view中的商品数据
    var data = myFactory.query();
    angular.forEach(data.res, function (item) {
        if (item.restId == nowId) {
            $scope.res = item;
            return false;   // 中断forEach循环 <=> break
        }
    });

    $scope.handMove = function(ev,direc){

        //console.log(ev.gesture.deltaX);
        left += ev.gesture.deltaX;
        if(left>0){
            left = 0;
        }
        $scope.navLeft = left;
    }

    var left = 0;
    $scope.onTouch = function(ev){
        console.log(left)
        left = $scope.navLeft;
    }

    
    $scope.checked = "热门商品";
    $scope.isSelected =  function(res){
        return res.category==$scope.checked?true:false;
    };
    $scope.changeNum = function(res){
        $scope.checked = res.category;
    }

    //--------------------添加至购物车
    $scope.addProduct = function(food){
        var inList = false;
        angular.forEach($scope.cartList, function (item) {
            if (item.name == $scope.res.restName) {
                inList = true;
                for( var i=0; i<item.menu.length ; i++ ){
                    if(item.menu[i].menuName == food.name){
                        item.menu[i].count++;
                        return false;
                    };
                };
                var newProduct = {
                    "menuName":food.name,
                    "menuSrc":food.imgsrc,
                    "count":1,
                    "star":food.star,
                    "sellNum":food.saleNumMonth,
                    "price":food.price,
                    "checked":true
                };
                item.menu.push(newProduct);
                return false;
            };
        });
        if(!inList){
            var newitem={
                name:$scope.res.restName,
                imgSrc:$scope.res.bgImg,
                checked:true,
                menu:[
                    {
                        "menuName":food.name,
                        "menuSrc":food.imgsrc,
                        "count":1,
                        "star":food.star,
                        "sellNum":food.saleNumMonth,
                        "price":food.price,
                        "checked":true
                    }
                ]
            };
            $scope.cartList.push(newitem);
        };
    };




});
