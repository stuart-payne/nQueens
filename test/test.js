const assert = require("assert");
const { getX, getY, safe } = require("../nQueens.js");

describe("Tests for functions used in nQueens solution", function () {
  describe("#getX()", function () {
    it("should return 2 when given value of 6 and width of 4", function () {
      assert.equal(getX(6, 4), 2);
    });

    it("should return 2 when given value 10 and width being 4", function () {
      assert.equal(getX(6, 4), 2);
    });
  });

  describe("getY", function () {
    it("should return 3 when given value of 12 and width of 4", function () {
      assert.equal(getY(12, 4), 3);
    });

    it("should return 3 when given value of 9 and width of 4", function () {
      assert.equal(getY(9, 4), 3);
    });

    it("should return 5 when given value of 24 and width of 5", function () {
      assert.equal(getY(24, 5), 5);
    });
  });

  describe("#safe()", function () {
    it("should return true when given values 1 and 10 and width 4", function () {
      assert.equal(safe(1, 10, 4), true);
    });

    it("should return false when given values 1 and 10 with width 4", function () {
      assert.equal(safe(1, 6, 4), false);
    });

    it("should return true when given values 5 and 15 with width 4", function () {
      assert.equal(safe(5, 15, 4), false);
    });

    it("should return true when given values 1 and 12 with width 4", function () {
      assert.equal(safe(1, 12, 4), true);
    });

    it("should return false when given values 5 and 15 with width 4", function () {
      assert.equal(safe(8, 11, 4), false);
    });
  });
});
