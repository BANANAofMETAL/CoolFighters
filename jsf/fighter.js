
//fighter constructor
Fighter = function(x,y,schema,character){
	var self={
		//positioning and drawing stats
		x:x,
		y:y,
		isTouchingGround:false,
		xAccel:0,
		yAccel:0,
		jumpHeight:15,
		movementSpeed:15,
		color:character.color,//will be changed into a picture(or sprite)
		height:character.height,
		width:character.width,
		
		//battle stats
		hp:10,
		mana:100,
		dmgres:dmgtypes(1,1,1,1,1,1),
		dmgdeadeal:dmgtypes(1,1,1,1,1,1),
		//buffs
		//defuffs
		
		//ability stats
		abilityBasicStats:character.abilityB,
		//ability1Stats:
		//ability2Stats:
		//ability3Stats:
		//abilityultStats:
		
		//key variables
		jumpkey:schema.up,
		moveleft:schema.left,
		moveright:schema.right,
		blockkey:schema.down,
		attackkey:schema.attack,
		
	
		//buttons
		isJumpPressed:false,
		isRightPressed:false,
		isLeftPressed:false,
		isBlockPressed:false,
		isAttackPressed:false,
	};
	
	return self;
}

Fighter.performAttack = function(){
	
}


	