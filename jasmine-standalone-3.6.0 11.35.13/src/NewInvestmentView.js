(function ($, Investment, Stock) {
  function NewInvestmentView (params) {
      this.$element = $(params.selector);

  }

  this.NewInvestmentView = NewInvestmentView;
})(jQuery, Investment, Stock);

NewInvestmentView.prototype.setSymbol = function(value) {
  this.$('.new-investment-stock-symbol').val(value);
};
