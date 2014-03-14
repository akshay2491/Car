angular.module('myApp.controllers',[ 'ngAnimate']).
        controller('navCtrl',function ($scope){
             $scope.active = true;
}).
        controller('FirstCtrl',function ($scope,myService,$routeParams,$location){
       var name=myService.Disp($routeParams.id);
            $scope.nav=[];
    
    $scope.del=function (index)
    {
              var m=confirm("do you want to delete?")
                if(m)
                { 
                    myService.del(index);
                }
    }
    
    
    $scope.cars=myService.list();
$scope.addCarDesignPhase=function()
  {
   
    myService.addCarDesignPhase($scope.newCar);
   
    
  }
  $scope.addCarConstructPhase=function()
  {
      
    myService.addCarConstructPhase($scope.newCar,name);
}
   $scope.addCarMainPhase=function()
  { 
    myService.addCarMainPhase($scope.newCar,name);

    
  }
   $scope.addCarFinalPhase=function()
  {
    myService.addCarFinalPhase($scope.newCar,name);
     $scope.newCar={};
      
    
  }
	
	
	
        }).
                controller('secondCtrl',function ($scope,$routeParams,myService){
                   var name=myService.Disp($routeParams.id);
                 
                   $scope.cars=name;
               
                    
        })