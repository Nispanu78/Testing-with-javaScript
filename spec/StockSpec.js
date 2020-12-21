describe("Stock", function() {
  var stock;
  var originalSharePrice = 0;

  beforeEach(function() {
    stock = new Stock({
      symbol: 'AOUE',
      sharePrice: originalSharePrice
    });
  });

  it("should have a share price", function() {
    expect(stock.sharePrice).toEqual(originalSharePrice);
  });

  it("should be able to update its share price", function(done) {
    stock.fetch({
      success: function () {
        expect(stock.sharePrice).toEqual(20.18);
        done();
      }
    });
  });
});
