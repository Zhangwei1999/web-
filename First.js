/*
* @Author: hp
* @Date:   2019-12-22 19:21:12
* @Last Modified by:   hp
* @Last Modified time: 2019-12-25 11:23:48
*/
var lbz = document.getElementsByClassName("lbz")[0];
var zi = document.getElementById("word");
var float1 = document.getElementsByClassName("float1")[0];
var float2 = document.getElementsByClassName("float2")[0];
var float3 = document.getElementsByClassName("float3")[0];
var spe = document.getElementById("spe");
var no = document.getElementsByClassName("no");
var body2center = document.getElementsByClassName("body2center")[0];
var lbt = document.getElementById("lbt");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var li5 = document.getElementById("li5");
var update = [li1,li2,li3,li4,li5];
var leftBt = document.getElementsByClassName("leftButton")[0];
var rightBt = document.getElementsByClassName("rightButton")[0];
var index = 1;
var rg = document.getElementsByClassName("rg");
var clo1 = document.getElementById("clo1");
var clo2 = document.getElementById("clo2");
var clo3 = document.getElementById("clo3");
var clo4 = document.getElementById("clo4");
var bdct = document.getElementsByClassName("body2center")[0];
var ma = document.getElementsByClassName("ma")[0];
var sm = document.getElementById("sm");
var timerma1;
var timerma2;
function getStyle(obj,style) {  
	if(obj.currentStyle) 
	{  
		return obj.currentStyle[style];  
	} 
	else 
	{  
		return getComputedStyle(obj)[style];  
	}
}
window.onload = function(){
	setInterval(function(){
		var now = parseInt(getStyle(lbz,"left"));
		lbz.style.left = now-4+"px";
		if(now <= -100){
			lbz.style.left = now + 1200+"px";
		}
	} ,50);
		
	ma.onmouseover = function(){
		clearInterval(timerma1);
		clearInterval(timerma2);
	}
	ma.onmouseout = function(){
		timerma1 = setInterval(function(){
			var nowleft = parseInt(getStyle(ma,"left"));
			var nowtop = parseInt(getStyle(ma,"top"));
			ma.style.left = nowleft + 2 + "px";
			ma.style.top = nowleft + 2 + "px";
			if((nowleft == 0)&&(nowtop == 0)){
				ma.style.left = nowleft + 6 + "px";
				ma.style.top = nowleft + 4 + "px";
			}
			if((nowleft == 600)&&(nowtop == 600)){
				timerma2 = setInterval(function(){
					clearInterval(timerma1);
					var nowleft = parseInt(getStyle(ma,"left"));
					var nowtop = parseInt(getStyle(ma,"top"));
					ma.style.left = nowleft - 2 + "px";
					ma.style.top = nowleft - 2 + "px";
					if((nowleft == 0)&&(nowtop == 0)){
						clearInterval(timerma2);
					}
				} ,50);
			}
		} ,50);
	}
	sm.onclick = function(){
		ma.style.display = "none";
	}
	setInterval(function(){
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		zi.style.color = "rgb(" + r + "," + g + "," + b + ")";			
	},150);
	setInterval(function(){
		var x1 = Math.floor(Math.random()*9+1.0);
		var y1 = Math.floor(Math.random()*10);
		var x2 = Math.floor(Math.random()*9+1.0);
		var y2 = Math.floor(Math.random()*10);
		var x3 = Math.floor(Math.random()*9+1.0);
		var y3 = Math.floor(Math.random()*10);
		var x4 = Math.floor(Math.random()*9+1.0);
		var y4 = Math.floor(Math.random()*10);
		var x5 = Math.floor(Math.random()*9+1.0);
		var y5 = Math.floor(Math.random()*10);
		var x6 = Math.floor(Math.random()*9+1.0);
		var y6 = Math.floor(Math.random()*10);
		var x7 = Math.floor(Math.random()*9+1.0);
		var y7 = Math.floor(Math.random()*10);
		var now1 = parseInt(getStyle(no[0],"top"));
		var now2 = parseInt(getStyle(no[1],"top"));
		var now3 = parseInt(getStyle(no[2],"top"));
		var now4 = parseInt(getStyle(no[3],"top"));
		var now5 = parseInt(getStyle(no[4],"top"));
		var now6 = parseInt(getStyle(no[5],"top"));
		var now7 = parseInt(getStyle(no[6],"top"));
		no[0].style.top = now1 - 4 + "px";	
		no[1].style.top = now2 - 4 + "px";		
		no[2].style.top = now3 - 4 + "px";		
		no[3].style.top = now4 - 4 + "px";		
		no[4].style.top = now5 - 4 + "px";		
		no[5].style.top = now6 - 4 + "px";		
		no[6].style.top = now7 - 4 + "px";	
		if(now1 <= -60){
			no[0].style.top = now1 + 418 + "px";
			no[0].innerHTML = "欢迎潮购会员"+x1+"****"+y1+"!";
		}
		if(now2 <= -60){
			no[1].style.top = now2 + 418 + "px";
			no[1].innerHTML = "欢迎潮购会员"+x2+"****"+y2+"!";
		}
		if(now3 <= -60){
			no[2].style.top = now3 + 418 + "px";
			no[2].innerHTML = "欢迎潮购会员"+x3+"****"+y3+"!";
		}
		if(now4 <= -60){
			no[3].style.top = now4 + 418 + "px";
			no[3].innerHTML = "欢迎潮购会员"+x4+"****"+y4+"!";
		}
		if(now5 <= -60){
			no[4].style.top = now5 + 418 + "px";
			no[4].innerHTML = "欢迎潮购会员"+x5+"****"+y5+"!";
		}
		if(now6 <= -60){
			no[5].style.top = now6 + 418 + "px";
			no[5].innerHTML = "欢迎潮购会员"+x6+"****"+y6+"!";
		}
		if(now7 <= -60){
			no[6].style.top = now7 + 418 + "px";
			no[6].innerHTML = "欢迎潮购会员"+x7+"****"+y7+"!";
		}
	} , 50);
}
spe.onmouseover = function(){
	spe.style.background = "rgb(" + 100 + "," + 57 + "," + 242 + ")";
}
spe.onmouseout = function(){
	spe.style.background = "rgb(" + 127 + "," + 135 + "," + 255 + ")";
}
float1.onmouseover = function(){
	float1.style.background = "rgb(" + 100 + "," + 57 + "," + 242 + ")";
}
float1.onmouseout = function(){
	float1.style.background = "rgb(" + 127 + "," + 135 + "," + 255 + ")";
}
float2.onmouseover = function(){
	float2.style.background = "rgb(" + 100 + "," + 57 + "," + 242 + ")";
}
float2.onmouseout = function(){
	float2.style.background = "rgb(" + 127 + "," + 135 + "," + 255 + ")";
}
float3.onmouseover = function(){
	float3.style.background = "rgb(" + 100 + "," + 57 + "," + 242 + ")";
}
float3.onmouseout = function(){
	float3.style.background = "rgb(" + 127 + "," + 135 + "," + 255 + ")";
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
rightBt.onclick = function(){
	index++;
	updateNext();
	animate(lbt,{left:-800*index},function(){
		if(index == 6){
			lbt.style.left = "-800px";
			index = 1;
		}
	});
}
leftBt.onclick = function(){
	index--;
	updateNext();
	animate(lbt,{left:-800*index},function(){
		if(index == 0){
			lbt.style.left = "-4000px";
			index = 5;
		}
	});	
}
function updateNext(){
	for(var i = 0;i<update.length;i++){
		update[i].className = " ";
	}
	if(index == 6){
		update[0].className = "first";
	}
	else if(index == 0){
		update[4].className = "first";
	}
	else{
		update[index-1].className = "first";
	}
}
for(var i = 0;i<update.length;i++){
	update[i].index = i;
	update[i].onclick = function(){
		index = this.index + 1;
		updateNext();
		animate(lbt,{left:-800*index});
	}
}
body2center.onmouseout = function(){
	animate(leftBt, {opacity:0});
	animate(rightBt, {opacity:0});
	time = setInterval(rightBt.onclick,3000);
}
body2center.onmouseover = function(){
	animate(leftBt, {opacity:50});
	animate(rightBt, {opacity:50});
	clearInterval(time);
}
time = setInterval(rightBt.onclick, 3000);

var timer;
rg[0].onmouseover = function(){
    startMove(0,0);
}
rg[0].onmouseout = function(){
    startMove(-80,0);
}
rg[1].onmouseover = function(){
	startMove(0,1);
}
rg[1].onmouseout = function(){
	startMove(-80,1);
}
rg[2].onmouseover = function(){
	startMove(0,2);
}
rg[2].onmouseout = function(){
	startMove(-80,2);
}
rg[3].onmouseover = function(){
	startMove(0,3);
}
rg[3].onmouseout = function(){
	startMove(-80,3);
}
function startMove(target,i){
    clearInterval(timer);
    timer = setInterval(function(){
        var speed;
        if(rg[i].offsetLeft<target){
            speed = 10;
        }
        else
        {
            speed = -10;
        }
        if(rg[i].offsetLeft == target){
            clearInterval(timer);
        }
        else
        {
            rg[i].style.left = rg[i].offsetLeft+speed+'px';
        }
    },30);
}
clo1.onmouseover = function(){
	bdct.style.display = "none";
	clo1.style.backgroundColor = "white";
	clo1.style.overflow = "visible";
}
clo1.onmouseout = function(){
	bdct.style.display = "block";
	clo1.style.backgroundColor = "#4053c5";
	clo1.style.overflow = "hidden";
}
clo2.onmouseover = function(){
	bdct.style.display = "none";
	clo2.style.backgroundColor = "white";
	clo2.style.overflow = "visible";
}
clo2.onmouseout = function(){
	bdct.style.display = "block";
	clo2.style.backgroundColor = "#4053c5";
	clo2.style.overflow = "hidden";
}
clo3.onmouseover = function(){
	bdct.style.display = "none";
	clo3.style.backgroundColor = "white";
	clo3.style.overflow = "visible";
}
clo3.onmouseout = function(){
	bdct.style.display = "block";
	clo3.style.backgroundColor = "#4053c5";
	clo3.style.overflow = "hidden";
}
clo4.onmouseover = function(){
	bdct.style.display = "none";
	clo4.style.backgroundColor = "white";
	clo4.style.overflow = "visible";
}
clo4.onmouseout = function(){
	bdct.style.display = "block";
	clo4.style.backgroundColor = "#4053c5";
	clo4.style.overflow = "hidden";
}