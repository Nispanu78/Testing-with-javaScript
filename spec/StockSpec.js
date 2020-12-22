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

  describe("when fetched", function() {
    beforeEach(function() {
      spyOn($, 'getJSON').and.callFake(function(url, callback) {
        callback({ sharePrice: 20.18 });
      });

      stock.fetch();
    });

    it("should update its share price", function() {
      expect(stock.sharePrice).toEqual(20.18);
    });
  });
});
