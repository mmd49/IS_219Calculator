
const Sum = require('../src/Calculator');

test ('Calculator ', () => {
    let result = Sum(1,2)
    expect(result).toBe(3);
});