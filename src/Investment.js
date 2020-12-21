(function () {
  function Investment (params) {
    params = params || {};
    this.stock = params.stock;
    this.shares = params.shares;
    this.sharePrice = params.sharePrice;
    this.cost = this.shares * this.sharePrice;
  }

  Investment.prototype = {
    roi: function() {
      return (this.stock.sharePrice - this.sharePrice) / this.sharePrice;
    },

    isGood: function() {
      return this.roi() > 0;
    }
  };

  this.Investment = Investment;
})();
