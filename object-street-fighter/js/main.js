// Create a street fightre constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(hp, str, agility, attack) {
    this.hp = hp
    this.str = str
    this.agility = agility
    this.attack = attack

    this.deff = function () {
        console.log("DEFFFF");
    }
    this.attAnemy = function () {
        console.log(`Defeat the enemy ${this.attack}`);
    }
}

let chunLi = new StreetFighter(100, 50, 100, 200)