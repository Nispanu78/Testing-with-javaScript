SimpleMath = function() {
};

SimpleMath.prototype.getFactorial = function (number) {
    if (number < 0) {
        throw new Error("There is no factorial for negative numbers");
}
else if (number == 1 || number == 0) {
// If number <= 1 then number! = 1.
    return 1;
} else {
// If number > 1 then number! = number * (number-1)!
    return number * this.getFactorial(number-1);
    }
}

SimpleMath.prototype.signum = function (number) {
    if (number > 0) {
        return 1;
} else if (number == 0) {
return 0;
} else {
    return -1;
    }
}

SimpleMath.prototype.average = function (number1, number2) {
    return (number1 + number2) / 2;
}

describe("SimpleMath", function() {
    var simpleMath;

    beforeEach(function() {
        simpleMath = new SimpleMath();
});

describe("when SimpleMath is used to find factorial", function() {
    it("should be able to find factorial for positive number",
        function() {
    expect(simpleMath.getFactorial(3)).toEqual(6);
    });

    it("should be able to find factorial for zero", function() {
    expect(simpleMath.getFactorial(0)).toEqual(1);
    });

    it("should be able to throw an exception when the number is
        negative", function() {
    expect(
        function() {
            simpleMath.getFactorial(-10)
        }).toThrow("There is no factorial for negative numbers");
    });
});
…
});
