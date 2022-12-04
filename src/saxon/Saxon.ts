import { Soldier } from "../soldier/Soldier";

export class Saxon extends Soldier {
    constructor(health: number, strength: number) {
        super(health, strength)
    }
    receiveDamage(damage: number): string {
        super.receiveDamage(damage);
        

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }

    }
}