
describe("SimpleMath", function() {
    var simpleMath;

    beforeEach(function() {
        simpleMath = new SimpleMath();
    });

    describe("when SimpleMath is used to find factorial", function() {
        it("should be able to find factorial for positive number",
            function() {
        expect(simpleMath.getFactorial(3)) .toEqual(6);
        });

        it("should be able to find factorial for zero", function() {
        expect(simpleMath.getFactorial(0)) .toEqual(1);
        });

        // it("should be able to throw an exception when the number is         negative",      function() {
        // expect(
        //     function() {
        //         simpleMath.getFactorial(-10)
        //     }) .toThrow ("There is no factorial for negative numbers");
        // });
    });

describe("When SimpleMath is used to find signum", function() {
    it("should be able to find the signum for a positive number",
        function() {
            expect(simpleMath.signum(3)).toEqual(1);
        });

        it("should be able to find the signum for zero",
        function() {
            expect(simpleMath.signum(0)).toEqual(0);
        });

        it("should be able to find the signum for a negative number", function() {
            expect(simpleMath.signum(-1000)).toEqual(-1);
        });
});

describe("when SimpleMath is used to find the average of two values",function()     {
            it("should be able to find the average of two values",
            function() {
                expect(simpleMath.average(3, 6)).toEqual(4.5);
    });
});

describe("the toBe Matcher", function() {
    it("should compare both types and values", function() {
        var actual = "123"
        var expected = "123";

        expect(actual) .toBe(expected)
    });
});

describe("the toEqual Matcher", function() {
    it("should be able to compare arrays", function() {
        var actual = [1,2,3];
        var expected = [1, 2, 3];

        expect(actual) .toEqual (expected);
    });
});

describe("the toBe Matcher", function() {
    it("should not be able to compare arrays", function(){
        var actual = [1,2,3];
            var expected = [1, 2, 3];

        expect(actual) .not.toBe(expected);
    });

})

describe("the toBeDefined Matcher", function() {
    it("should be able to check defined objects", function() {
        var object = [1,2,3]

        expect(object) .toBeDefined();
    });
});

describe("the toBeUndefined Matcher", function() {
    it("should be able to check undefined objects", function() {
        var object;

        expect(object) .toBeUndefined();
    })
})

describe("the toBeNull Matcher", function() {
    it("should be able to check if an object value is null",
    function() {
        var object = null;
        expect(object) .toBeNull();
    });
});

describe("the toBeTruthy Matcher", function () {
    it("should be able to check if an object value is true",
    function() {
        var object = true;
        expect(object) .toBeTruthy();
    });
});

describe("the toBeFalsy Matcher", function() {
    it("should be able to check if an object value is false",
    function() {
        var object = false;
        expect(object) .toBeFalsy();
    });
});

describe("the toContain Matcher", function() {
    it("should be able to check is a String contains a specific substring", function() {
        expect("Hello World from Cairo") .toContain("Cairo")
    });

    it("should be able to check if an Array contains a specific item", function() {
        expect(["TV", "Watch", "Table"]) .toContain("Watch")
    });
});

describe("the toBeLess Matcher", function() {
    it("should be able to perform the less than operation",
    function() {
        expect(4) .toBeLessThan(5);
    });
});

describe("the toBeGreater Matcher", function() {
    it("should be able to perform the great than operation", function() {
        expect(6) .toBeGreaterThan(4);
    });
});

describe("the toMatch Matcher", function() {
    it("should be able to match the value with a regular expression", function() {
        expect(5).toMatch("[0-9]");
    });
});

});
