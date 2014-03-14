'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  service("myService",function()
{
 
  var uid=1;

  var car=[{ name:'Akshay',id:0 ,type:'volvo',color:'blue',seats:2}];
                   this.list=function()
		 {  
                      
		   return car;
		 }
                 
		this.del=function (index)
                {  car.splice(index,1);
                  
                }
                this.addCarConstructPhase=function (cust,no)
                {   
                     angular.forEach(car, function(value,index) {
                         if(value.id==no.id)
                         { 
                             car[index].color = cust.color;
                             car[index].seats = cust.seats;
                            
                        }
                    });

                }
                this.addCarMainPhase=function (cust,no)
                {   alert(no.id)
                   angular.forEach(car, function(value,index) {alert("loop")
                       alert(value.id) 
                       alert(no.id)
                         if(value.id==no.id)
                         { alert("true")
                             car[index].Pname = cust.Pname;
                             car[index].Mname = cust.Mname;
                            alert("done")
                        }
                    });
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
                this.addCarFinalPhase=function (cust,no)
                {
                     angular.forEach(car, function(value,index) {
                         if(value.id==no.id)
                         { 
                             car[index].Simg = cust.Simg;
                           
                            
                        }
                    });
                    
                }
		this.addCarDesignPhase=function(cust)
		{
		  if(car.id==cust.id)
			  { alert("increment")
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