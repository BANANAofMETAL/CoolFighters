var ctx = document.getElementById("ctx").getContext("2d"); 
ctx.font = '80px Arial';
ctx.mozImageSmoothingEnabled = false;	//better graphics for pixel art
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;



var WIDTH = 1000;
var HEIGHT = 500;

var player1 = Fighter(0,10,schema1);
var player2 = Fighter(400,10,schema2);
