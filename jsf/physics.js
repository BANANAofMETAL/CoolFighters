
performJump = function (actor){
	if (actor.isTouchingGround && actor.isJumpPressed){
		actor.isTouchingGround = false;
		actor.yAccel = -15;
	}
}

gravity = function (actor){
	
	performJump(actor);
	
	if (!actor.isTouchingGround){
		actor.y += actor.yAccel;
		actor.yAccel ++;
	}
	else {
		actor.yAccel = 0;
	}
	
	//CHANGE THIS TO DRAW
	ctx.fillText(actor.character,actor.x,actor.y);
	
	if (actor.y >= HEIGHT){
		actor.y = HEIGHT;
		actor.isTouchingGround = true;
	}
}




movement=function(actor,speed){
	if(actor.isLeftPressed){
		if(actor.x-speed>0){
			actor.x-=speed;
		}
		else {
			actor.x=0;
		}

	}
	if(actor.isRightPressed){
		if(actor.x+speed<WIDTH-55){
			actor.x+=speed;
		}
		else {
			actor.x=WIDTH-55;
		}
		
	}
	
	
	
	
}