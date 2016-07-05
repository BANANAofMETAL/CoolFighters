
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
		maxhp:100,
		hp:100,
		hpregen:2,
		maxmana:200,
		mana:200,
		manaregen:4,
		dmgres:dmgtypes(1,1,1,1,1,1),
		dmgdeadeal:dmgtypes(1,1,1,1,1,1),
		//buffs
		//defuffs
		
		ability:character.ability,
				
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
		isAttackPressed:[false,false,false,false,false],
        
        //collitions
        isLeftCollide:false,
        isRightCollide:false,
        isUpCollide:false,
        isDownCollide:false,
	};
	
	
	self.performAttack = function(receiver){
		//increases cooldown of ability, until it reaches required time.
		self.ability[0].currcd++;
		
		//health and mana regeneration each second. 
		if (FRAME_RATE%25==0){//1 second. could be a variable
			if(self.hp+self.hpregen>=self.maxhp){
				self.hp = self.maxhp;
			}
			else{
				self.hp += self.hpregen;
			}
			if(self.mana+self.manaregen>=self.maxmana){
				self.mana = self.maxmana;
			}
			else{
				self.mana += self.manaregen;
			}
			//make this a loop
		}
		//if player has the mana, cooldown is up and is pressing atk button,
		//performs an attack (bagan with melee)
		if (self.isAttackPressed[0] &&
			self.ability[0].cd<=self.ability[0].currcd && 
			self.mana>=self.ability[0].manacost){
		
			self.mana-=self.ability[0].manacost;
			self.ability[0].currcd = 0;
			switch (self.ability[0].type){
				case 'melee':
					if (testColition(self,receiver,self.ability[0].range)){
						if (receiver.isBlockPressed){
							receiver.hp-=self.ability[0].basedmg.physical/2;
						}
						else{
							receiver.hp-=self.ability[0].basedmg.physical;
						}
						if(receiver.hp<=0){
							receiver.hp = 0;
							BATTLE_OVER = true;
						}
					}
					break;
				default:break;
			}
		}
	}
	
	return self;
}

//Fighter.abilitiy = {};




	