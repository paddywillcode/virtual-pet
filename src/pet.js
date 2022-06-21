
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

Pet.prototype.feed = function() {
if ((this.hunger - 3) <= 0) {
    this.hunger = 0;
} else {
    this.hunger -= 3;
};
};

Pet.prototype.checkUp = function() {

    const fitnessAlert = (this.fitness <= 3);
    const hungerAlert = (this.hunger >= 5);

    if (fitnessAlert && hungerAlert) {
        return 'I am hungry AND I need a walk'
    };
    
    if (fitnessAlert) {
        return 'I need a walk'
    }; 
    
    if (hungerAlert) {
        return 'I am hungry'
    }; 
    
    if (!fitnessAlert && !hungerAlert) {
        return 'I feel great!'
    };

};

module.exports = Pet;
