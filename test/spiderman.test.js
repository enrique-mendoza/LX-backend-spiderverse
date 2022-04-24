const Spiderman = require('./../app/spiderman');

describe('Unit Tests for Spiderman class', () => {
    test('1) Create an spiderman object', () => {
        const andrew = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')

        expect(andrew.name).toBe('Spiderman Sony');
        expect(andrew.age).toBe(31);
        expect(andrew.actor).toBe('Andrew Garfield');
        expect(andrew.movies).toBe(2);
        expect(andrew.studio).toBe('Sony');
    });

    test('2) Use the method getInfo()', () => {
        const tom = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 5, 'Marvel');
        expect(tom.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
});