// The describe function creates a global function which equates to the "Investment" test suite
describe("Investment", function() {
    var stock;
    var investment;

// beforeEach is a function that executes once before each spec
    beforeEach(function() {
        stock = new Stock();
        investment = new Investment({
            stock: stock,
            shares: 100,
            sharePrice: 20
        });
    });
// The first acceptance criterion is described with the global function "it"
// It contains two parameters: 1) title of the spec which is "should be of a stock", 2) a function that contains the spec code;
    it("should be of a stock", function() {
// // Assertions are written using the global Jasmine function expect along with a matcher that in this case is toBe() which indicates what comparison must be made with the values.
        expect(investment.stock).toBe(stock);
    });

    it("should have the share paid price", function() {
        expect(investment.sharePrice).toEqual(20)
    });
    it("should have a cost", function() {
        expect(investment.cost).toEqual(2000);
    });
    it("should have the invested shares' quantity", function() {
        expect(investment.shares).toEqual(100);
    });
            describe("when its stock share price valorizes", function() {
                beforeEach(function(){
                    stock.sharePrice = 40;
                    });
                it("should have a positive return of investment", function() {
                        expect(investment.roi()).toEqual(1);
                        });
                it("should be a good investment", function() {
                        expect(investment).toBeAGoodInvestment();
                        });
            });
                        describe("When its stock price devalorizes", function() {
                            beforeEach(function() {
                                stock.sharePrice = 0;
                            });

                            it("should have a negative return of investment", function() {
                                expect(investment.roi()).toEqual(-1);
                            });
                            it("should be a bad investment", function() {
                                expect(investment).not.toBeAGoodInvestment();

                            });
                        });

});
