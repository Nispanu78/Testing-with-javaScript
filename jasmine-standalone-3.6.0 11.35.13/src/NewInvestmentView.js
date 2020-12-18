(function ($, Investment, Stock) {
    function NewInvestmentView (params) {
    this.listView = params.listView;

    this.$element.on('submit', function () {
      this.listView.addInvestment(/* new investment */);
    }.bind(this));
  }

  this.NewInvestmentView = NewInvestmentView;
})(jQuery, Investment, Stock);
