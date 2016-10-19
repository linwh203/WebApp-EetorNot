/**
 * Created by SS on 2016/10/2.
 */

myapp.controller("tabsCtrl",function($scope,$ionicTabsDelegate){
    $scope.color = function(num){
       return $ionicTabsDelegate.selectedIndex()==num?'_orangeFont':'_blackFont_32'
    }
});
