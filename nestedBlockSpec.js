describe("MyTest", function() {
    beforeEach(function() {
    alert("beforeEach level1");
    });
    describe("MyTest level2", function() {
            beforeEach(function() {
        alert("beforeEach level2");
        });
        describe("MyTest level3", function() {
            beforeEach(function() {
            alert("beforeEach level3");
            });
            it("is a simple spec in level3", function() {
            alert("A simple spec in level3");
            expect(true).toBe(true);
            });
            afterEach(function() {
            alert("afterEach level3");
            });
        })
        afterEach(function() {
        alert("afterEach level2");
        });
    });
    afterEach(function() {
    alert("afterEach level1");
    });
});
