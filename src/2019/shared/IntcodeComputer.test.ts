import { IntcodeComputer } from './IntcodeComputer';

describe('IntcodeComputer', () => {
  it.each([
    [[1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], 3500],
    [[1, 0, 0, 0, 99], 2],
    [[2, 3, 0, 3, 99], 2],
    [[2, 4, 4, 5, 99, 0], 2],
    [[1, 1, 1, 4, 99, 5, 6, 0, 99], 30],
  ])('should work', (input, expected) => {
    const computer = new IntcodeComputer();
    expect(computer.run(input)).toEqual(expected);
  });
});