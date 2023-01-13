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
contructor(name; health , strength){
    super(name , health , strength )
    this.name = name
}
receiveDamage(damage) {
    this.health -= damage ;
}
battleCry(damage) {
    this.health -= damage ;
}
}
// Saxon
class Saxon {}

// War
class War {}
