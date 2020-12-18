describe("NewInvestmentView", function() {
    beforeEach(function() {
        loadFixtures('NewInvestmentView.html');
        appendLoadFixtures('InvestmentListView.html');
        listView = new InvestmentListView({id: 'investment-list'
        });

        view = new NewInvestmentView({
            id: 'new-investment',
            listView: listView
        });
    });
    it("should expose a property with its DOM element", function() {
        expect(view.$element).toExist();
        });
    it("should have an empty stock symbol", function() {
        expect(view.getSymbolInput()).toHaveValue('');
    });
});
describe("NewInvestmentView", function() {
  beforeEach(function() {
    loadFixtures('NewInvestmentView.html');
    appendLoadFixtures('InvestmentListView.html');

    listView = new InvestmentListView({
      id: 'investment-list'
    });

    view = new NewInvestmentView({
      id: 'new-investment',
      listView: listView
    });
 });
});
describe("when its add button is clicked", function() {
    beforeEach(function() {
      // fill form inputs
      // simulate the clicking of the button
    });

    it("should add the investment to the list", function() {
      expect(listView.count()).toEqual(1);
    });
});
describe("InvestmentTracker", function() {
  beforeEach(function() {
    loadFixtures('NewInvestmentView.html');
    appendLoadFixtures('InvestmentListView.html');

    listView = new InvestmentListView({
      id: 'investment-list'
    });

    newView = new NewInvestmentView({
      id: 'new-investment'
    });

    application = new InvestmentTracker({
      listView: listView,
      newView: newView
    });
  });
});
describe("when a new investment is created", function() {
    beforeEach(function() {
      // fill form inputs
      newView.create();
    });

    it("should add the investment to the list", function() {
      expect(listView.count()).toEqual(1);
    });
});
