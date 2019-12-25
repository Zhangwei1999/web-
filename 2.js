var b = document.getElementById("box");
var nav = document.getElementById("nav").children;
var s = document.getElementById("slider");
var left = document.getElementById("left");
var right = document.getElementById("right");
var x = 1 ;
var ismoving =  false;

function next(){
	x++;
	navchange();
	animate(s,{left:-430*x},function(){
		if (x === 6) {
			s.style.left="-430px";
			x = 1;
		}
	});
	
}
function pre(){
	x--;
	navchange();
	animate(s,{left:-430*x},function(){
		if (x === 0) {
			s.style.left="-2150px";
			x = 5;
		}
	});
	
}
var t = setInterval(next,3000);

b.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(t);

}
b.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	t = setInterval(next,3000);
	
}

right.onclick = next;
left.onclick = pre;


for (var i = 0; i < nav.length; i++) {
	nav[i].idx = i;
	nav[i].onclick = function(){
		x = this.idx+1;
		navchange();
		animate(slider,{left:-430 * x});
	}
}
function navchange() {
	for (var i =0;i<nav.length;i++){
		nav[i].className = " ";
	}

	if (x===6){
		nav[0].className = "click";
	}
	else if(x===0){
		nav[4].className = "click";
	}
	else{
		nav[x-1].className = "click";
	}

}


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
	}, 30)
}
window.onload = function(){
	var box = document.getElementById("box");
	var arrLI = box.children[0].children;
	var bigbox = document.getElementById("big");
	for(var i=0; i<arrLI.length; i++){
		
		arrLI[i].onmouseover = (function(num){
			return function(){
				this.onmousemove = function(evt){
					var e = evt || event;
					var x = e.clientX;
					var y = e.clientY;
					if(x >= (document.body.offsetWidth - bigbox.offsetWidth)) {
						bigbox.style.left = x + 10 - bigbox.offsetWidth +"px";
						bigbox.style.top = y + 10 +"px";
					} else {
						bigbox.style.left = x + 10 +"px";
						bigbox.style.top = y + 10 +"px";
					}
				}
				bigbox.style.display = "block";
				
				var oImg = document.createElement("img");
				oImg.src = "大图"+(num)+".jpg";
				bigbox.innerHTML = "";
				bigbox.appendChild(oImg);
			}
		})(i);
		arrLI[i].onmouseout = function(){
			bigbox.style.display = "none";
		}
	}
}

var zi = document.getElementById("word");
setInterval(function(){
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		zi.style.color = "rgb(" + r + "," + g + "," + b + ")";			
	},150);

