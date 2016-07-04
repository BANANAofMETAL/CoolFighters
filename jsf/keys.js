//http://www.cambiaresearch.com/articles/15/javascript-key-codes

document.onkeydown = function(event){
	
	
	if (event.keyCode == PAUSED_KEY){
		IS_PAUSED = !IS_PAUSED;
	}
	
	
	switch (event.keyCode){
		//player 1
		case player1.jumpkey:
			player1.isJumpPressed=true;
			break;
		case player1.moveleft:
			player1.isLeftPressed=true;
			break;
		case player1.moveright:
			player1.isRightPressed=true;
			break;
		case player1.blockkey:
			player1.isBlockPressed=true;
			break;
		case player1.attackkey[0]:
			player1.isAttackPressed[0]=true;
			player1.color = 'black';
			break;
		
		//player 2
		case player2.jumpkey:
			player2.isJumpPressed=true;
			break;
		case player2.moveleft:
			player2.isLeftPressed=true;
			break;
		case player2.moveright:
			player2.isRightPressed=true;
			break;
		case player2.blockkey:
			player2.isBlockPressed=true;
			break;
		case player2.attackkey[0]:
			player2.isAttackPressed[0]=true;
			player2.color = 'orange';
			break;
		default: break;
	}
	
	
}

document.onkeyup = function(event){
	
	switch (event.keyCode){
		//player 1
		case player1.jumpkey:

			player1.isJumpPressed=false;
			break;
		case player1.moveleft:
			player1.isLeftPressed=false;
			break;
		case player1.moveright:
			player1.isRightPressed=false;
			break;
		case player1.blockkey:
			player1.isBlockPressed=false;
			break;
		case player1.attackkey[0]:
			player1.isAttackPressed[0]=false;
			player1.color = 'blue';
			break;
		
		//player 2
		case player2.jumpkey:
			player2.isJumpPressed=false;
			break;
		case player2.moveleft:
			player2.isLeftPressed=false;
			break;
		case player2.moveright:
			player2.isRightPressed=false;
			break;
		case player2.blockkey:
			player2.isBlockPressed=false;
			break;
		case player2.attackkey[0]:
			player2.isAttackPressed[0]=false;
			player2.color = 'red';
			break;
		default: break;
	}
}



var schema1={
	up:87,//w
	left:65,//a
	right:68,//d
	down:83,//s
	attack:[81,81,81,81,81]//q
};
	
var schema2={
	up:38,//ArU
	left:37,//ArL
	right:39,//ArR
	down:40,//ArD
	attack:[96,96,96,96,96]//Num0
};
	