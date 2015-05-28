describe("numeralI", function() {
  it("converts any number between 1 and 3 to roman numeral", function() {
    expect(numeralI(1)).to.eql("I");
  });
});

describe("numeralV", function() {
  it("converts any number between 4 and 8 to roman numeral", function() {
    expect(numeralV(5)).to.equal("V");
  });
});

describe("numeralX", function() {
  it("converts any number between 9 and 39 to roman numeral", function() {
    expect(numeralX(22)).to.equal("XXII");
  });
});

describe("numeralL", function() {
  it("converts any number between 40 and 89 to roman numeral", function() {
    expect(numeralL(73)).to.equal("LXXIII")
  });
});
