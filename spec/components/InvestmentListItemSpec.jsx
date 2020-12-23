describe("InvestmentListItem", function() {
  var TestUtils = React.addons.TestUtils;

  beforeEach(function() {
    setFixtures('<div id="application-container"></div>');
    var container = document.getElementById('application-container');

    var element = React.createElement(InvestmentListItem);
    component = React.render(element, container);
  });

  it("should render", function() {
    expect(component.getDOMNode()).toEqual('li.investment-list-item');
  });
});
