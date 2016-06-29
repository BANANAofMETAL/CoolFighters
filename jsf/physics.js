
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
		actor.yAccel ++;
		if (actor.isBlockPressed){
			actor.yAccel +=3;
		}
	}
	else {
		actor.yAccel = 0;
	}
	
	if (actor.y >= HEIGHT){
		actor.y = HEIGHT;
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
	if (actor.x == 0 && actor.isLeftPressed){
		return;
	}
	
	//if both left and right are pressed ,(currently) does nothing
	if ((actor.isLeftPressed && actor.isRightPressed) || actor.isBlockPressed){
		
	}
	
	//otherwise, increases respective acceleration.
	else{
		if(actor.isLeftPressed){
			if(actor.xAccel-2<=-actor.movementSpeed){
				actor.xAccel=-actor.movementSpeed;
			}
			else{
				actor.xAccel -=2;
			}

		}
	
		if(actor.isRightPressed){
		
			if(actor.xAccel+2>=actor.movementSpeed){
			actor.xAccel=actor.movementSpeed;
			}
			else{
				actor.xAccel +=2;
			}

		}
	}
	
	
	//xAccel always seeks to become 0, so if it's not 0,
	//decreases acceletation. This is always called, wether
	//a button is pressed or not.
	if(actor.xAccel<0){
		if(actor.xAccel+1>=0){
			actor.xAccel=0;
		}
		else{
			actor.xAccel +=1;
		}
		
		if(actor.x-actor.xAccel>0){
			actor.x+=actor.xAccel;
		}
		else {
			actor.x=0;
			actor.xAccel=0;//if leaving the map is considered a death, this should leave
		}
		
	}
	else if(actor.xAccel>0){
		if(actor.xAccel-1<=0){
			actor.xAccel=0;
		}
		else{
			actor.xAccel -=1;
		}
		
		if(actor.x+actor.xAccel<WIDTH-55){
			actor.x+=actor.xAccel;
		}
		else {
			actor.x=WIDTH-55;
			actor.xAccel=0;//if leaving the map is considered a death, this should leave
		}
	}
}