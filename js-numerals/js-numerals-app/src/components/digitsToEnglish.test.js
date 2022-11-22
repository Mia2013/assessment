import { digitsToEnglish } from "./digitsToEnglish";

describe("Testing numeric input into the English phrase of that number", () => {
  it("7 should return seven", () => {
    expect(digitsToEnglish(7) == "seven");
  });
  it("42 should return forty-two", () => {
    expect(digitsToEnglish(42) == "forty-two");
  });
  it("1999 should return one thousand nine hundred and ninety-nine", () => {
    expect(digitsToEnglish(1999) == "one thousand nine hundred and ninety-nine");
  });
  it("2001 should return two thousand and one", () => {
    expect(digitsToEnglish(2001) == "two thousand and one");
  });
  it("17999 should return seventeen thousand nine hundred and ninety-nine", () => {
    expect(digitsToEnglish(17999) == "seventeen thousand nine hundred and ninety-nine");
  });
  it("100001 should return one hundred thousand and one", () => {
    expect(digitsToEnglish(100001) == "one hundred thousand and one");
  });
  it("342251 should return three hundred and forty-two thousand two hundred and fifty-one", () => {
    expect(digitsToEnglish(342251) == "three hundred and forty-two thousand two hundred and fifty-one");
  });
  it("1300420 should return one million three hundred thousand four hundred and twenty", () => {
    expect(digitsToEnglish(1300420) == "one million three hundred thousand four hundred and twenty");
  });
});

