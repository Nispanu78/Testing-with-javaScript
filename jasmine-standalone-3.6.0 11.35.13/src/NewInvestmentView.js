(function ($, Investment, Stock) {
  function NewInvestmentView (params) {
      this.$element = $(params.selector);
      NewInvestmentView.prototype.setSymbol = function(value) {
        this.$('.new-investment-stock-symbol').val(value);
        };
    }
  function InvestmentTracker (params) {
  this.listView = params.listView;
  this.newView = params.newView;

  this.newView.onCreate(function (investment) {
    this.listView.addInvestment(investment);
        }.bind(this));
    }
  NewInvestmentView.prototype.create = function() {
  this._callback(/* new investment */);
};

this.NewInvestmentView = NewInvestmentView;
})(jQuery, Investment, Stock);
