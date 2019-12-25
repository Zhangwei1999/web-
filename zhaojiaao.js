/*
* @Author: dell
* @Date:   2019-12-25 10:49:38
* @Last Modified by:   hp
* @Last Modified time: 2019-12-25 11:47:56
*/
var zi = document.getElementById("word");
var libiana=document.getElementById("libian1");
var libianb=document.getElementById("libian111");
var box=document.getElementById("box");
var list=document.getElementById("nav").children;
var a=document.getElementById("a");
var left=document.getElementById("left");
var right=document.getElementById("right");
var to=document.getElementById("top");
var i=1;
var move=true;
var t;
var on= document.getElementById("cf1");
var on1= document.getElementById("red1");
var on2= document.getElementById("red2");
var on3= document.getElementById("red3");
var on4= document.getElementById("red4");
var a1=document.getElementsByName("a");
var b1=document.getElementsByName("b");
var ab=document.getElementsByName("hong11");
var zz1=document.getElementById("zz1");
var zz2=document.getElementById("zz2");
var zz3=document.getElementById("zz3");
var zz4=document.getElementById("zz4");
var abc=document.getElementById("abc");
libianb.onmouseover=function(){
	libiana.style.display="block";
}
libianb.onmouseout=function(){
	libiana.style.display="none";
}
abc.onclick=function(){
 	alert("评价成功");
}
ab[0].onmouseover=function(){
 	ab[0].style.borderColor="red";
 	zz1.style.display="block";
}
ab[1].onmouseover=function(){
 	ab[1].style.borderColor="red";
 	zz2.style.display="block";
}  
ab[2].onmouseover=function(){
 	ab[2].style.borderColor="red";
 	zz3.style.display="block";
}
ab[3].onmouseover=function(){
 	ab[3].style.borderColor="red";
 	zz4.style.display="block";
}
ab[0].onmouseout=function(){
 	ab[0].style.borderColor="black";
 	zz1.style.display="none";
}
ab[1].onmouseout=function(){
 	ab[1].style.borderColor="black";
 	zz2.style.display="none";
}
ab[2].onmouseout=function(){
 	ab[2].style.borderColor="black";
 	zz3.style.display="none";
}
ab[3].onmouseout=function(){
  	ab[3].style.borderColor="black";
  	zz4.style.display="none";
}
a1[0].onmouseover=function(){
	var n=setInterval(function(){
		var now=parseInt(window.getComputedStyle(b1[0],null)["top"]);
		if(now==338){
			clearInterval(n);
		}
		else{
			b1[0].style.top=now-1+"px";
		}
	},7);
}
a1[0].onmouseout=function(){
	var n=setInterval(function(){
		var now=parseInt(window.getComputedStyle(b1[0],null)["top"]);
		if(now==398){
			clearInterval(n);
		}
		else{
			b1[0].style.top=now+1+"px";
		}
	},7);
}
a1[2].onmouseover=function(){
	var n=setInterval(function(){
		var now=parseInt(window.getComputedStyle(b1[2],null)["top"]);
		if(now==338){
			clearInterval(n);
		}
		else{
			b1[2].style.top=now-1+"px";
		}
	},7);
}
a1[2].onmouseout=function(){
	var n=setInterval(function(){
		var now=parseInt(window.getComputedStyle(b1[2],null)["top"]);
		if(now==398){
			clearInterval(n);
		}
		else{
			b1[2].style.top=now+1+"px";
		}
	},7);
}
a1[4].onmouseover=function(){
	var n=setInterval(function(){
		var now=parseInt(window.getComputedStyle(b1[4],null)["top"]);
		if(now==338){
   			clearInterval(n);
   		}
   		else{
			b1[4].style.top=now-1+"px";
		}
	},7);
}
a1[4].onmouseout=function(){
	var n=setInterval(function(){
		var now=parseInt(window.getComputedStyle(b1[4],null)["top"]);
		if(now==398){
			clearInterval(n);
		}
		else{
			b1[4].style.top=now+1+"px";
		}
	},7);
}
on4.onmouseover=function(){
	starMove(0,on4);
}
on4.onmouseout=function(){
    starMove(-80,on4);
}
on1.onmouseover=function(){
	starMove(0,on1);
}
on1.onmouseout=function(){
	starMove(-80,on1);
}
on2.onmouseover=function(){
    starMove(0,on2);
}
on2.onmouseout=function(){
	starMove(-80,on2);
}
on3.onmouseover=function(){
	starMove(0,on3);
}
on3.onmouseout=function(){
	starMove(-80,on3);
}
on.onmouseover=function(){
	starMove(0,on);
}
on.onmouseout=function(){
	starMove(-80,on);
}
function starMove(target,on){
	clearInterval(t);
	t=setInterval(function(){
		var speed;
		if(on.offsetLeft<target){
			speed=10;
		}
		else{
			speed=-10;
		}
		if(on.offsetLeft==target){
			clearInterval(t);
		}
		else{
			on.style.left=on.offsetLeft+speed+"px";
		}
	},30);
}
on4.onclick=function(){
	prompt("用户名:");
	prompt("密码:");
}
function nexter(){
	if(move){
		move=false;
		i++;
		change();
		animate(a,{left:-804*i},function(){
			if(i>5){
				a.style.left="-800px";
				i=1;
			}
			move=true;
		});	
	}
}
function priver(){
	if(move){
		move=false;
		i--;
		change();
		animate(a,{left:-804*i},function(){
			if(i<1){
				a.style.left="-4000px";
				i=5;
			}
			move=true;
		});	
	}
}
var t=setInterval(nexter,2000);
right.onclick=nexter;
left.onclick=priver;
box.onmouseover=function(){
	animate(right,{opacity:50});
	animate(left,{opacity:50});
	clearInterval(t);
}
box.onmouseout=function(){
	animate(right,{opacity:0});
	animate(left,{opacity:0});
	t=setInterval(nexter,2000);
}
for(var j=0;j<5;j++){
	list[j].n=j;
	list[j].onclick=function(){
		i=this.n+1;
		change();
		animate(a,{left:-804*i});
	}
}
function change(){
	for(var j=0;j<5;j++){
		list[j].className="";
	}
	if(i==6){
		list[0].className="c1";
	}
	else if(i<1){
		list[4].className="c1";
	}
	else{
		list[i-1].className="c1";
	} 
}	
//评价框框:
var comments = ["差", "一般", "中等", "还行", "好"];
var imgs = document.getElementById("pic").children;
var text = document.getElementById("txt");
var clickIndex = -1;
function show(index){
	for (var j = index + 1; j < imgs.length; j++){
		imgs[j].src = "images/star0.png";
	}
	if (index < 2){
		for (var j = 0; j <= index; j++){
			imgs[j].src = "images/star1.png";
		}
	}else{
		for (var j = 0; j <= index; j++){
			imgs[j].src = "images/star2.png";
		}
	}
	text.value = comments[index] ? comments[index] : "";
}
for (var x = 0; x < imgs.length; x++){
	imgs[x].index = x;
	imgs[x].onmouseover = function(){
		show(this.index);
	};
	imgs[x].onclick = function(){
        clickIndex = this.index;
       	show(clickIndex);		
	};
	imgs[x].onmouseout = function() {
       	show(clickIndex);
   	}
};
var yincang1=document.getElementById("yincang1");
var yin1=document.getElementById("anniu1");
/*yin1.onmouseover=function(){
	yincang1.style.display="block";
}
yincang1.onmouseover=function(){
	yincang1.style.display="block";
	yincang1.style.textDecoration="underline";
	yincang1.style.fontSize="18px";
}
yincang1.onclick=function(){
	yin1.value="店铺";
	yincang1.innerHTML="宝贝";
}
yincang1.onmouseout=function(){
	yincang1.style.display="none";
	yincang1.style.fontSize="16px";
}
yin1.onmouseout=function(){
	yincang1.style.display="none";
}*/
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
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
	}, 30);
}
window.onload = function(){
	setInterval(function(){
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		zi.style.color = "rgb(" + r + "," + g + "," + b + ")";			
	},150);
}