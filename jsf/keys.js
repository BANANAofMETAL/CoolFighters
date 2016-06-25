//http://www.cambiaresearch.com/articles/15/javascript-key-codes

document.onkeydown = function(event){
	
	
	
	if (event.keyCode === player1.jumpkey){
		player1.character = 'L';
		player1.isJumpPressed=true;
	}
	
	
	if (event.keyCode === player2.jumpkey){
		player2.character = 'L';
		player2.isJumpPressed=true;
	}
}

document.onkeyup = function(event){
	
	if (event.keyCode === player1.jumpkey){
		player1.character='H';
		player1.isJumpPressed=false;
	}
	
	
	if (event.keyCode === player2.jumpkey){
		player2.character='H';
		player2.isJumpPressed=false;
	}
}



var schema1={
	up:65,
	left:'A',
	right:'D',
	};
	
var schema2={
	up:32,
	left:'ArL',
	right:'ArR',
	};
	
	
