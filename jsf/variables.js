var ctx = document.getElementById("ctx").getContext("2d"); 
ctx.font = '80px Arial';
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

ability = function(type,basedmg,scaledmg,cooldown,currentcooldown){
	var self = {
		type:type,
		basedmg:basedmg,
		scaledmg:scaledmg,
		cd:cooldown,
		currcd:currentcooldown,
	}
	return self;
}

var WIDTH = 1000;			//canvas width
var HEIGHT = 500;			//canvas height

