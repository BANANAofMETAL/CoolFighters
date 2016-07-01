
//fighter constructor
Fighter =function(x,y,schema,character){
	var self={
		x:x,
		y:y,
		isTouchingGround:false,
		xAccel:0,
		yAccel:0,
		jumpHeight:15,
		movementSpeed:15,
		hp:10,
		color:character.color,//will be changed into a picture(or sprite)
		height:character.height,
		width:character.width,
		
		
		jumpkey:schema.up,
		moveleft:schema.left,
		moveright:schema.right,
		blockkey:schema.down,
		
	
		//buttons
		isJumpPressed:false,
		isRightPressed:false,
		isLeftPressed:false,
		isBlockPressed:false,
	};
	
	return self;
}

	