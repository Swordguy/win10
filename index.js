window.onload=beginFunc;
function beginFunc(){
	var bbb=document.getElementById("d1");
	var ccc=document.getElementById("d2");
	var ddd=document.getElementById("d31");
	var d32=document.getElementById("d32");
	var cccc=["日","一","二","三","四","五","六"];
	var d5=document.getElementById("d5");
	var d33=document.getElementById("d33");	
    var spanAll=document.getElementsByTagName("span");
	var n=new Date();
	function format(m){
		return m>=10?m:"0"+m;
	}
	function bb(){		
		var b=new Date();
		bbb.innerHTML=format(b.getHours())+":"+format(b.getMinutes())+":"+format(b.getSeconds());
	}
	setInterval(bb,100);
	var b=new Date();
		ccc.innerHTML=b.getFullYear()+"年"+(b.getMonth()+1)+"月"+b.getDate()+"日"+","+"星期"+cccc[b.getDay()];			   
	function getEndDay(year,month){
		return new Date(year,month,0).getDate();//某月的最后一天是几号
	}
	function getFirstWeek(year,month){
		return new Date(year,month-1,1).getDay();//某月的第一天是周几
	}  
    var f=new Date();
    var firstWeek1=getFirstWeek(new Date().getFullYear(),new Date().getMonth()+1);
    setDate(f);
    function setDate(){   	
    	var endDay=getEndDay(f.getFullYear(),f.getMonth()+1);//本月最后一天
    	var lastEndDay=getEndDay(f.getFullYear(),f.getMonth());//上个月最后一天
    	var firstWeek=getFirstWeek(f.getFullYear(),f.getMonth()+1);//本月第一天周几
    	var endNum;
    	var curDay=1;
    	var day=1; 
    	ddd.innerHTML=f.getFullYear()+"年"+(f.getMonth()+1)+"月";		
    	if(firstWeek==0){
    		endNum=7;
    		var lastDate1=lastEndDay-endNum+1;    		
    	for (var i = 0; i < 42; i++) {  
    			if (i<endNum) {   				 					
				spanAll[i].innerHTML=lastDate1++;
				spanAll[i].style.color="#8d8c89";
			}    
   			else if(i>=endNum+endDay){  				
				spanAll[i].innerHTML=day++;
				spanAll[i].style.color="#8d8c89";
			}
			else{
				spanAll[i].innerHTML=curDay++;
				spanAll[i].style.color="#fff";
			} 			
          }
    	}
	   else{				
		var lastDate2=lastEndDay-firstWeek+1;						
		for (var i = 0; i < 42; i++) {						
		if(i<firstWeek) { 				
			 spanAll[i].innerHTML=lastDate2++; 
			 spanAll[i].style.color="#8d8c89";
		} 
		else if(i>firstWeek+endDay-1){			   
			spanAll[i].innerHTML=day++;
			spanAll[i].style.color="#8d8c89";
		}
   		else{  	
   			spanAll[i].innerHTML=curDay++;
   			spanAll[i].style.color="#fff";  		  			
   		}	
		}
		//console.log(new Date().getDate()-1+firstWeek)
	} 
	if(f.getFullYear()==n.getFullYear()&&f.getMonth()==n.getMonth()){
   				spanAll[n.getDate()-1+firstWeek].style.backgroundColor="#0078D7"  ; 				
   			}
	if(f.getFullYear()!=n.getFullYear()||f.getMonth()!=n.getMonth()){
   				spanAll[n.getDate()-1+firstWeek1].style.backgroundColor=""  ;  				
   			}

    }
    d32.onclick=function(){
					f.setMonth(f.getMonth()-1);
					setDate(f);					
				}
	d33.onclick=function(){
					f.setMonth(f.getMonth()+1);
					setDate(f);
				}
}
