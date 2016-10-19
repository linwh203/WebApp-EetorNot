myapp.controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    //$scope.mousedown = function(dis){
    //    $scope.start = dis;
    //}
    $scope.handMove = function(ev,direc){
        //console.log(ev.gesture.deltaX)
        if(ev.gesture.deltaX >= 0 ){
            if(direc=='left'){
                $ionicSlideBoxDelegate.enableSlide(false);
                //$ionicSlideBoxDelegate.slide(0,0)
            }
            if(direc=='right'){
                $ionicSlideBoxDelegate.enableSlide(true);
            }
        }else{
            if(direc=='left'){

                $ionicSlideBoxDelegate.enableSlide(true);
            }
            if(direc=='right'){
                $ionicSlideBoxDelegate.enableSlide(false);
            }
        }
    }

    $scope.stopMove = function(){
        $ionicSlideBoxDelegate.enableSlide(false);
    }


});
