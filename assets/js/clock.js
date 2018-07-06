var hour=document.getElementById("hr");
var minute=document.getElementById("min");
var second=document.getElementById("sec");



function clock(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    if (h<10) {
    	h='0'+h;
    }
    if(m<10){
    	m='0'+m;
    }
    if (s<10) {
    	s='0'+s;
    }
	hour.innerHTML = h;
	minute.innerHTML = m;
	second.innerHTML = s;
}


setInterval(clock,1000);