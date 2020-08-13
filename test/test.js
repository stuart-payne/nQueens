const assert = require("assert");
const { getX, getY, safe } = require("../nQueens.js");

const getTestGenerator = (params, func) => {
  params.forEach((val) => {
    it(`should return ${val.returnVal} when given value of ${val.value} and width of ${val.width}`, function () {
      assert.equal(func(val.value, val.width), val.expected);
    });
  });
};

describe("Tests for functions used in nQueens solution", function () {
  describe("#getX()", function () {
    const testParams = [
      { value: 6, width: 4, expected: 2 },
      { value: 10, width: 4, expected: 2 },
    ];
    getTestGenerator(testParams, getX);
  });

  describe("getY", function () {
    const testParams = [
      { value: 12, width: 4, expected: 3 },
      { value: 9, width: 4, expected: 3 },
      { value: 24, width: 5, expected: 5 },
    ];
    getTestGenerator(testParams, getY);
  });

  describe("#safe()", function () {
    const testParams = [
      { pos: 1, queenPos: 10, width: 4, expected: true },
      { pos: 1, queenPos: 6, width: 4, expected: false },
      { pos: 5, queenPos: 15, width: 4, expected: false },
      { pos: 1, queenPos: 12, width: 4, expected: true },
      { pos: 8, queenPos: 11, width: 4, expected: false },
      { pos: 1, queenPos: 7, width: 5, expected: false }
    ];

    testParams.forEach((params) => {
      it(`it should return ${params.expected} when given values ${params.pos} and ${params.queenPos} abd width ${params.width}`, function () {
        assert.equal(
          safe(params.pos, params.queenPos, params.width),
          params.expected
        );
      });
    });
  });
});
