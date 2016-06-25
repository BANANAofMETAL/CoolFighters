

gravity = function (actor){
	if (actor.isTouchingGround && actor.isJumpPressed){
		actor.isTouchingGround = false;
		actor.yAccel = -15;
	}
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