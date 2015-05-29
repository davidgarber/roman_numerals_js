describe("numeralI", function() {
  it("converts any number between 1 and 3 to roman numerals", function() {
    expect(numeralI(1)).to.eql("I");
  });
});

describe("numeralV", function() {
  it("converts any number between 4 and 8 to roman numerals", function() {
    expect(numeralV(5)).to.equal("V");
  });
});

describe("numeralX", function() {
  it("converts any number between 9 and 39 to roman numerals", function() {
    expect(numeralX(22)).to.equal("XXII");
  });
});

describe("numeralL", function() {
  it("converts any number between 40 and 89 to roman numerals", function() {
    expect(numeralL(73)).to.equal("LXXIII")
  });
});

describe("numeralC", function() {
  it("converts any number between 90 and 399 to roman numerals", function() {
    expect(numeralC(247)).to.equal("CCXLVII")
  });
});

describe("numeralD", function() {
  it("converts any number between 400 and 899 to roman numerals", function() {
    expect(numeralD(674)).to.equal("DCLXXIV")
  });
});

describe("numeralM", function() {
  it("converts any number between 900 and 3999 to roman numerals", function() {
    expect(numeralM(2859)).to.equal("MMDCCCLIX")
  });
});
