const csvtoarray = require("./../index");
const { cloneArray, returnArray } = require('./sample/array/clonearray');

describe("convert", () => {
  it("Should be 11 in length", () => {
    expect(csvtoarray(__dirname + "/sample/example-csv.csv").length).toBe(11);
  })
});
