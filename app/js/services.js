'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  service("myService",function()
{
 
  var uid=1;

  var car=[{ name:'Akshay',id:0 ,type:'volvo'}];
                   this.list=function()
		 {  var carDetails=localStorage.getItem('NewCarDesignPhase')
                      
		   return car;
		 }
		this.del=function (index)
                {  car.splice(index,1);
                  
                }
                this.addCarConstructPhase=function (cust)
                { alert(cust.id)
                    for(var i in car){
                        if(car[i].id==cust.id)
                        {
                            car[i].push(cust)
                        }
                    }
                }
                this.addCarMainPhase=function (cust)
                {
                    for(var i in car){
                        if(car[i].id==cust.id)
                        {
                            car[i].push(cust)
                        }
                    }
                }
                this.Disp=function (num)
                {
                    for (var i in car){
                        if(car[i].id==num)
                        {
                            return car[i];
                            
                        }
                    }
                }
                this.addCarFinalPhase=function (cust)
                {
                    for(var i in car){
                        if(car[i].id==cust.id)
                        {
                            car[i].push(cust)
                        }
                    }
                }
		this.addCarDesignPhase=function(cust)
		{
		  if(car.id==cust.id)
			  {
			    cust.id=uid++;
			    car.push(cust);
                            
			  }
			  else
			  {
			    for(i in car)
			    {
			      if(car[i].id==cust.id)
			      {
			        car[i]=cust;
			      }
			    }
			  }
		}
})