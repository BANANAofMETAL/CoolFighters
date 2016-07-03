/**
* This function tests colition
*
* (extra explanation)
*
* (thoughts and future plans)
* -
*
* returns boolean
*/

var gravity_pol=1;
var slide=2;
var friction=1;

testColition=function (ent1,ent2){
var rect1={
	x:ent1.x-ent1.width/2,
	y:ent1.y-ent1.height/2,
	width:ent1.width,
	height:ent1.height,
}

var rect2={
	x:ent2.x-ent2.width/2,
	y:ent2.y-ent2.height/2,
	width:ent2.width,
	height:ent2.height,
}

return testColitionRect(rect1,rect2);
}


/**
* This function tests Rectangle Colition
*
* (extra explanation)
*
* (thoughts and future plans)
* -
*
* returns boolean
*/

testColitionRect=function (r1,r2){

	return r1.x<=r2.x+r2.width
	&&     r2.x<=r1.x+r1.width
	&&     r1.y<=r2.y+r2.height
	&&     r2.y<=r1.y+r1.height ;

}

/**
* This function makes the player jump.
*
* (extra explanation)
*
* (thoughts and future plans)
* -May implement double jump function.
* -Will have to modify in order to support future map "platforms".
* -
*
* returns void
*/
performJump = function (actor){
	if (actor.isTouchingGround && actor.isJumpPressed){
		actor.isTouchingGround = false;
		actor.yAccel = -actor.jumpHeight;
	}
}


/**
* This function controls the y-axis movements of the player.
*
* (extra explanation)
* if the player is blocking, then it would not perform a jump.
* if the player blocks mid-air, he will decent faster.
*
* (thoughts and future plans)
* -May implement double jump function.
* -Will have to modify in order to support future map "platforms".
* -
*
* returns void
*/
gravity = function (actor){
	if(!actor.isBlockPressed){
		performJump(actor);
	}
	
	if (!actor.isTouchingGround){
		actor.y += actor.yAccel;
		actor.yAccel +=gravity_pol;
		if (actor.isBlockPressed){
			actor.yAccel +=gravity_pol*3;
		}
	}
	else {
		actor.yAccel = 0;
	}
	
	if (actor.y >= HEIGHT - (actor.height/2)){
		actor.y = HEIGHT - (actor.height/2);
		actor.isTouchingGround = true;
	}
}



/**
* This function controls the x-axis movements of the player.
*
* (extra explanation)
* if a button is pressed, then it
* 
*
* (thoughts and future plans)
* -Fix the x-axis movement while mid-air/
* -Prevent instant movement change while key of the opposite direction
*   is pressed.
* -prevent movement while blocking.
*
* returns void.
*/
movement=function(actor){
	
	/*
	*  if a player tries to move right while he is already at 
	*  0 on x-axis, the player bugs. These three lines prevent that.
	*/
	if (actor.x <= actor.width/2 && actor.isLeftPressed){
		actor.x = actor.width/2;
		actor.xAccel = 0;
		return;
	}
	
	//if both left and right are pressed ,(currently) does nothing
	if ((actor.isLeftPressed && actor.isRightPressed) || actor.isBlockPressed){
		
	}
	
	//otherwise, increases respective acceleration.
	else{
		if(actor.isLeftPressed){
			if(actor.xAccel-slide<=-actor.movementSpeed){
				actor.xAccel=-actor.movementSpeed;
			}
			else{
				actor.xAccel -=slide;
			}

		}
	
		if(actor.isRightPressed){
		
			if(actor.xAccel+slide>=actor.movementSpeed){
			actor.xAccel=actor.movementSpeed;
			}
			else{
				actor.xAccel +=slide;
			}

		}
	}
	
	
	//xAccel always seeks to become 0, so if it's not 0,
	//decreases acceletation. This is always called, wether
	//a button is pressed or not.
	if(actor.xAccel<0){
		if(actor.xAccel+friction>=0){
			actor.xAccel=0;
		}
		else{
			actor.xAccel +=friction;
		}
		
		if(actor.x-actor.xAccel>actor.width/2){
			actor.x+=actor.xAccel;
		}
		else {//if leaving the map is considered a death, this should leave
			actor.x=actor.width/2;
			actor.xAccel=0;
		}
		
	}
	else if(actor.xAccel>0){
		if(actor.xAccel-friction<=0){
			actor.xAccel=0;
		}
		else{
			actor.xAccel -=friction;
		}
		
		if(actor.x+actor.xAccel<WIDTH-actor.width/2){
			actor.x+=actor.xAccel;
		}
		else {//if leaving the map is considered a death, this should leave
			actor.x=WIDTH-actor.width/2;
			actor.xAccel=0;
		}
	}
}

refreshFrame = function(actor){
	gravity(actor);
	movement(actor);
}