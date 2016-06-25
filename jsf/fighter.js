

Fighter =function(x,y,schema){
	var self={
		x:x,
		y:y,
		isTouchingGround:false,
		xAccel:0,
		yAccel:0,
		character:'H',
		
		jumpkey:schema.up,
		moveleft:schema.left,
		moveright:schema.right,
	
	
		//buttons
		isJumpPressed:false,
		isRightPressed:false,
		isLeftPressed:false,
	};
	
	return self;
}

	