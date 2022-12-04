import { Saxon } from "../saxon/Saxon";
import { Soldier } from "../soldier/Soldier";
import { Viking } from "../viking/Viking";

export class War{
    vikingArmy:Array<Viking>;
    saxonArmy:Array<Saxon>;
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(viking:Viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon:Saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let selectViking = this.selectCombatent(this.vikingArmy);
        let selectSaxon = this.selectCombatent(this.saxonArmy);
        const message = selectSaxon.receiveDamage(selectViking.strength);
        if(selectSaxon.health<=0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(selectSaxon),1)
        }
        return message;
    }
    saxonAttack(){
        let selectSaxon = this.selectCombatent(this.saxonArmy);
        let selectViking:Viking = this.selectCombatent(this.vikingArmy) as Viking;
        const message = selectViking.receiveDamage(selectSaxon.strength);

        if(selectViking.health<=0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(selectViking),1)
        }
        return message;
    }


    private selectCombatent(arrayCombatent:Array<Viking | Saxon>){
        const rnd = Math.floor(Math.random()*arrayCombatent.length);
        return arrayCombatent[rnd];
    }
    showStatus(){
        if(!this.saxonArmy.length)
            return "Vikings have won the war of the century!"
    }

}