angular.module('myApp.controllers',[ 'ngAnimate']).
        controller('navCtrl',function ($scope){
             $scope.active = true;
}).
        controller('FirstCtrl',function ($scope,myService){
       
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
       alert($scope.newCar.id)
    
  }
  $scope.addCarConstructPhase=function()
  {
       
      
    myService.addCarConstructPhase($scope.newCar);
  
   
    
  }
   $scope.addCarMainPhase=function()
  {
    myService.addCarMainPhase($scope.newCar);
    
    
  }
   $scope.addCarFinalPhase=function()
  {
    myService.addCarFinalPhase($scope.newCar);
    
    
  }
	
	
	
        }).
                controller('secondCtrl',function ($scope,$routeParams,myService){
                   var name=myService.Disp($routeParams.id);
                 
                   $scope.cars=name;
               
                    
        })