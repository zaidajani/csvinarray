const csvtoarray = require("./../index");
const { cloneArray, returnArray } = require('./sample/array/clonearray');

describe("convert", () => {
  it("should equal this", () => {
    // let comparray = [
    //   "Name,sirname",
    //   "Zaid,ajani",
    //   "ajani,ajani",
    //   "imaad,ajani",
    //   "ajani,ajani",
    //   "sohel,ajani",
    //   "ajani,ajani",
    //   "mariyam,ajani",
    //   "ajani,ajani",
    //   "shamim,merchant",
    //   "merchant,merchant",
    // ];
    // expect(csvtoarray(__dirname + "/sample/example-csv.csv")).toEqual(
    //   comparray
    // );

    let array = [
      'Name,sirname',
      'Zaid,ajani',
      'ajani,ajani',
      'imaad,ajani',
      'ajani,ajani',
      'sohel,ajani',
      'ajani,ajani',
      'mariyam,ajani',
      'ajani,ajani',
      'shamim,merchant',
      'merchant,merchant'
    ]
    expect(returnArray()).toEqual(array);

  });
  it("Should be 11 in length", () => {
    expect(csvtoarray(__dirname + "/sample/example-csv.csv").length).toBe(11);
  })
});
