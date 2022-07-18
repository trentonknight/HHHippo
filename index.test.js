const sum = require('./hippo');


test('9 pellets exhausted in one turn at player 2', () => {
expect(hippo(9)).toBe([1,2]);
});



 // hippo(1) => [1, 0]
  // hippo(9) => [1, 2]
  // hippo(19) => [2, 1]

