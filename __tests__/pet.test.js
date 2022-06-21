const Pet = require('../src/pet');

describe('constructor', () => {
	it('returns an object', () => {
		expect(new Pet('Fido')).toBeInstanceOf(Object);
	});
});

describe('constructor', () => {
	it('sets the name property', () => {
		const pet = new Pet('Fido');
	
		expect(pet.name).toEqual('Fido');
	});	
});

describe('constructor', () => {
	it('starts with 0 as an age', () => {
		const pet = new Pet('Fido');

		expect(pet.age).toEqual(0);
	});
});

describe('growUp', () => {
	it('adds one year to age of pet', () => {
		const pet = new Pet('Fido');

		pet.growUp();

		expect(pet.age).toEqual(1);
	});
});

describe('constructor', () => {
	it('starts with a hunger of 0', () => {
		const pet = new Pet('Fido');

		expect(pet.hunger).toEqual(0);
	});
});

describe('growUp', () => {
	it('adds a hunger of 5', () => {
		const pet = new Pet('Fido');

		pet.growUp();

		expect(pet.hunger).toEqual(5);
	});
});

describe('constructor', () => {
	it('starts with a fitness of 10', () => {
		const pet = new Pet('Fido');

		expect(pet.fitness).toEqual(10);
	});
});

describe('growUp', () => {
	it('decreases pet fitness by 3', () => {
		const pet = new Pet('Fido');

		pet.growUp();

		expect(pet.fitness).toEqual(7);
	});
});

describe('walk', () => {
	it('increases fitness by 4', () => {
	  const pet = new Pet('Fido');
  
	  pet.fitness = 4;
	  pet.walk();
  
	  expect(pet.fitness).toEqual(8);
	});
	
	it('increases the fitness to a max. of 10', () => {
		const pet = new Pet('Fido');

		pet.fitness = 8;
		pet.walk();

		expect(pet.fitness).toEqual(10);
	});
  });

  describe('feed', () => {
	it('decreases hunger level by 3', () => {
		const pet = new Pet('Fido');

		pet.hunger = 15;
		pet.feed();

		expect(pet.hunger).toEqual(12);
	});
	
	it('decreases hunger to a minimum of 0', () => {
		const pet = new Pet('Fido');

		pet.hunger = 2;
		pet.feed();

		expect(pet.hunger).toEqual(0);
	});

  });

  describe('checkUp', () => {

	it('returns instructions for improving the pet\'s fitness if 3 or less', () => {
		const pet = new Pet('Fido');

		pet.fitness = 2;

		pet.checkUp();

		expect(pet.checkUp()).toEqual('I need a walk');

	});

	it('returns instructions for satiating pet\'s hunger if 5 or more', () => {
		const pet = new Pet('Fido');

		pet.hunger = 6;

		pet.checkUp();

		expect(pet.checkUp()).toEqual('I am hungry');
	});

	it('checks if pet is both hungry and unfit', () => {
		const pet = new Pet('Fido');

		pet.fitness = 1;
		pet.hunger = 8;

		pet.checkUp();

		expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
	});

	it('checks if pet is full and fit', () => {
		const pet = new Pet('Fido');

		pet.fitness = 7;
		pet.hunger = 2;

		pet.checkUp();

		expect(pet.checkUp()).toEqual('I feel great!');
	});

  });
