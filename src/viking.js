// Soldier
class Soldier {

    constructor(health , strength ){ 
        this.health =  health
        this.strength = strength
       }
   attack() { return this.strength ;
     } 
   receiveDamage(damage) {
    this.health -= damage ;
}
}

// Viking
class Viking extends Soldier {
constructor( name ,health , strength){
    super( health , strength )
    this.name = name
}
receiveDamage(theDamage) {
    this.health -= theDamage ;
    if (this.health > 0){
         return `${this.name} has received ${theDamage} points of damage`
        }
        else { return `${this.name} has died in act of combat` ; }
}
battleCry() {
    return  "Odin Owns You All!" ;
}
}
// Saxon
class Saxon extends Soldier {
   
    receiveDamage(theDamage) {
        this.health -= theDamage ;
    
    if (this.health >0){
        return `A Saxon has received ${theDamage} points of damage`;}
    
    else {return  "A Saxon has died in combat";}
    }
} 

// War
class War {
constructor ( )
{  // this.addViking= viking()
    //this.addSaxon= saxon()

   this.vikingArmy= []
   this.saxonArmy= []
}
addViking (oneviking) {this.vikingArmy.push(oneviking);} ;
addSaxon (onesaxon) {this.saxonArmy.push(onesaxon);};
vikingAttack () {
const vikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
const randomViking = this.vikingArmy[vikingIndex];
const saxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
const randomSaxon = this.saxonArmy[saxonIndex]
const attackStrength= randomViking.attack ();
const result = randomSaxon.receiveDamage(attackStrength)  ;
;
if (randomSaxon.health <= 0){
this.saxonArmy.splice(saxonIndex,1);

}
return result;

}


saxonAttack () {
    };
showStatus () {}

}