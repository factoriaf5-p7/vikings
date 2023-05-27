export class Soldier {
    strength: number;
    health: number;
    

    // Constructor 
    constructor(health: number, strength: number) {
        this.health = health;
        this.strength = strength;
    }

    attack = () => { return this.strength}
    receiveDamage = (damage:number) =>{
        this.health -= damage;
    }

   



    

}