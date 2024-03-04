const { default: test } = require('node:test');
const {Triangle, Circle, Square} = require('./shapes');

test('Triangle', () => {
    const triangle = new Triangle('red');
    const expectedSVG = '<polygon points="60, 110 65, 120 70, 115" fill="red" />';
    expectedSVG(triangle.render()).toEqual(expectedSVG);
});
test('Circle', () => {
    const circle = new Circle('blue');
    const expectedSVG = '<circle cx="25" cy="75" r="20" fill="blue" />';
    expectedSVG(circle.render()).toEqual(expectedSVG);
});
test('Square', () => {
    const square = new Square('green');
    const expectedSVG = '<square x="30" y="10" width="30" height="30" fill="red" />';
    expect(square.render()).toEqual(expectedSVG);
});