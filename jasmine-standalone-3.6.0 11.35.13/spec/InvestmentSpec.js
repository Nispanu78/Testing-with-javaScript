// The describe function creates a global function which equates to the "Investment" test suite
describe("Investment", function() {
// The first acceptance criterion is described with the global function "it"
// It contains two parameters: 1) title of the spec which is "should be of a stock", 2) a function that contains the spec code;
    it("should be of a stock", function() {
// Assertions are written using the global Jasmine function expect along with a matcher that in this case is toBe() which indicates what comparison must be made with the values.
        var stock = new Stock();
        var investment = new Investment(stock);
// We pass stock as parameter to the Investment function
        expect(investment.stock).toBe(stock);
    });
});
