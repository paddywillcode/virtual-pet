
const MAXIMUM_FITNESS = 10;
const BIRTH_AGE = 0;
const BIRTH_HUNGER = 0;
const BIRTH_FITNESS = 10;


function Pet(name) {

    this.name = name;
    this.age = BIRTH_AGE;
    this.hunger = BIRTH_HUNGER;
    this.fitness = BIRTH_FITNESS;

};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
    this.fitness += 4;
} else {
    this.fitness = MAXIMUM_FITNESS;
};

};

module.exports = Pet;
