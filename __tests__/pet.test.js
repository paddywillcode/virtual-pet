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
