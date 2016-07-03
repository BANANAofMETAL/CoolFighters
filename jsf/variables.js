var ctx = document.getElementById("ctx").getContext("2d"); 
ctx.font = '30px Consolas';
ctx.mozImageSmoothingEnabled = false;	//better graphics for pixel art
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

dmgtypes = function(air,earth,electric,fire,physical,water){
	var self = {
		air:air,
		earth:earth,
		electric:electric,
		fire:fire,
		physical:physical,
		water:water,
	}
	return self;
}

ability = function(id,type,basedmg,scaledmg,cooldown,currentcooldown,manacost){
	var self = {
		type:type,
		basedmg:basedmg,
		scaledmg:scaledmg,
		cd:cooldown,
		currcd:currentcooldown,
		manacost:manacost,
	}
	return self;
}

var WIDTH = 1000;			//canvas width
var HEIGHT = 500;			//canvas height
var FRAME_RATE = 0;
var IS_PAUSED = false;
var PAUSED_KEY = 80; //p

