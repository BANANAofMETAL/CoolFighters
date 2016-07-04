
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
	
	
	self.performAttack = function(receiver){
		//increases cooldown of ability, until it reaches required time.
		self.abilityBasicStats.currcd++;
		
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
		if (self.isAttackPressed &&
			self.abilityBasicStats.cd<=self.abilityBasicStats.currcd && 
			self.mana>=self.abilityBasicStats.manacost){
		
			self.mana-=self.abilityBasicStats.manacost;
			self.abilityBasicStats.currcd = 0;
			
			if (testColition(self,receiver)){
				receiver.hp-=25;
				if(receiver.hp<=0){
					receiver.hp = 0;
					BATTLE_OVER = true;
				}
			}
		}
	}
	
	return self;
}

//Fighter.abilitiy = {};




	