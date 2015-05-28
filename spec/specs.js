describe("numeralI", function() {
  it("will return I for the number 1", function() {
    expect(numeralI(1)).to.eql("I");
  });
});

describe("numeralV", function() {
  it("will return V for the number 5", function() {
    expect(numeralV(5)).to.equal("V");
  });
});
