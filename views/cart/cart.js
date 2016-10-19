myapp.controller("cartCtrl",function($scope){

    $scope.remove=function(list,menu){
        var listIndex=$scope.cartList.indexOf(list);
        var menuIndex=$scope.cartList[listIndex].menu.indexOf(menu);
        $scope.cartList[listIndex].menu.splice(menuIndex,1);
        /*for(var i=0;i<$scope.cartList.length;i++){
            var index=$scope.cartList[i].menu.indexOf(menu);
            console.log(index)
            $scope.cartList[i].menu.splice(index,1);
        }*/
        console.log($scope.cartList[listIndex].menu);

    };

    $scope.$watch('cartList',function(newValue,oldValue){
        for(var i=0;i<$scope.cartList.length;i++){
            if($scope.cartList[i].menu.length==0){
                $scope.cartList.splice(i,1);
            }
        }
    },true);


    $scope.up=function(menu){
        menu.count++;
    };
    $scope.down=function(menu){

        if(menu.count>0){
            menu.count--;
        }else{
            menu.count=0;
        }

        $scope.$watch('list.checked',function(newValue,oldValue){
            if(menu.count==0){
                menu.checked=false;
                $scope.all=false;
            }
        },true)

    };

    $scope.total=function(){
        var tal=0;
        for(var i=0;i<$scope.cartList.length;i++){
            for(var j=0;j<$scope.cartList[i].menu.length;j++){
                var num=0;
                var price=0;
                if($scope.cartList[i].menu[j].checked){
                    num=$scope.cartList[i].menu[j].count;
                    price=$scope.cartList[i].menu[j].price;
                }
                tal+=num*price;
            }
        }
        return tal;
    };

    $scope.all=false;
    $scope.allchecked=function() {
        //console.log($scope.cartList[1].menu)
        if($scope.all==true){
            for(var i=0;i<$scope.cartList.length;i++){
                $scope.cartList[i].checked=true;
                for(var j=0;j<$scope.cartList[i].menu.length;j++){
                    $scope.cartList[i].menu[j].checked=true;
                }
            }
            $scope.all=true;
        }else{
            for(var i=0;i<$scope.cartList.length;i++){
                $scope.cartList[i].checked=false;
                for(var j=0;j<$scope.cartList[i].menu.length;j++){
                    $scope.cartList[i].menu[j].checked=false;
                }
            }
            $scope.all=false;
        };

    };

    $scope.$watch('cartList',function(newValue,oldValue){
        var num=0;
        for(var i=0;i<$scope.cartList.length;i++){
            if($scope.cartList[i].checked){
                num++;
            }
        }
        if(num==$scope.cartList.length){
            $scope.all=true;
        }else{
            $scope.all=false;
        }

    },true)


    $scope.selectAllMenu=function(list){
        if(list.checked){
            for(var i=0;i<list.menu.length;i++){
                list.menu[i].checked=true
            }
        }
        if(!list.checked){
            for(var i=0;i<list.menu.length;i++){
                list.menu[i].checked=false;
            }
        }
    };

    //$scope.num=0;
    $scope.selectMenu=function(list){
        var num=0;
        for(var i=0;i<list.menu.length;i++){
            if(list.menu[i].checked==true){
                num++
            }else{
                num--
            }
        }
        if(num==list.menu.length){
            list.checked=true;
        }else{
            list.checked=false;
        }
    }

});

