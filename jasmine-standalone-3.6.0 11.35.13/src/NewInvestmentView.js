(function ($, Investment, Stock) {
    function NewInvestmentView (params) {
        this.listView = params.listView;
        this.newView = params.newView;

        this.newView.onCreate(function (investment) {
        this.listView.addInvestment(investment);

      }.bind(this));
        NewInvestmentView.prototype.onCreate = function(callback) {
            this._callback = callback;
        };
    }

  this.NewInvestmentView = NewInvestmentView;
})(jQuery, Investment, Stock);
