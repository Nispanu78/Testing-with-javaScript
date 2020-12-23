(function (React) {
  var InvestmentListItem = React.createClass({
    displayName: 'InvestmentListItem',
    render: function () {
      return React.DOM.li({ className: 'investment-list-item' }, 'Investment');
    }
  });

  this.InvestmentListItem = InvestmentListItem;
})(React);
