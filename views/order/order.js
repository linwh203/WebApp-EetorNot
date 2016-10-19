
myapp.controller("orderCtrl",function($scope,$state,$ionicViewSwitcher){
    $scope.typeNum = 1;
    $scope.isSelected =  function(num){
       return num==$scope.typeNum?true:false;
    }
    $scope.changeNum = function(num){
        $scope.typeNum = num;
    }




})

