import { runCases, TestCase } from '../../shared/tests';
import { solver } from '.';

const testCases: TestCase[] = [
  {
    input: `0,9 -> 5,9\n8,0 -> 0,8\n9,4 -> 3,4\n2,2 -> 2,1\n7,0 -> 7,4\n6,4 -> 2,0\n0,9 -> 2,9\n3,4 -> 1,4\n0,0 -> 8,8\n5,5 -> 8,2`,
    expected: {
      part1: 5,
      part2: 12,
    },
  },
];

describe(solver.dirName.split('/').pop(), () => {
  runCases(solver, testCases);
});
