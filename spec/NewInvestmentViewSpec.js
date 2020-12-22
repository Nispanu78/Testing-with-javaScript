describe("NewInvestmentView", function() {
  var view;

  beforeEach(function() {
    loadFixtures('NewInvestmentView.html');

    view = new NewInvestmentView({
      selector: '#new-investment'
    });
  });

  it("should expose a property with its DOM element", function() {
    expect(view.$element).toExist();
  });

  it("should allow the input of the stock symbol", function() {
    expect(view.$element.find('.new-investment-stock-symbol')).toBeMatchedBy('input[type=text]');
  });

  it("should allow the input of shares", function() {
    expect(view.$element).toContainHtml('<input type="number" class="new-investment-shares" name="shares" value="0">');
  });

  it("should allow the input of the share price", function() {
    expect(view.$element).toContainElement('input[type=number].new-investment-share-price');
  });

  itShouldBeAtTheDefaultState();

  describe("with its inputs correctly filled", function() {
    beforeEach(function() {
      view.$element.find('.new-investment-stock-symbol').val('AOUE').trigger('change');
      view.$element.find('.new-investment-shares').val(100).trigger('change');
      view.$element.find('.new-investment-share-price').val(20).trigger('change');
    });

    it("should allow to add", function() {
      expect(view.$element.find('input[type=submit]')).not.toBeDisabled();
    });

    it("should be able to create an investment from the inputs", function() {
      var newInvestment = view.create();
      expect(newInvestment.stock.symbol).toEqual('AOUE');
      expect(newInvestment.shares).toEqual(100);
      expect(newInvestment.sharePrice).toEqual(20);
    });

    describe("when its add button is clicked", function() {
      beforeEach(function() {
        spyOnEvent(view.$element, 'submit');

        view.$element.find('input[type=submit]').click();
      });

      it("should submit the form", function() {
        expect('submit').toHaveBeenTriggeredOn(view.$element);
      });
    });

    describe("and when the form is submitted", function() {
      beforeEach(function() {
        spyOn(view, 'create');
        spyOnEvent(view.$element, 'submit');

        view.$element.submit();
      });

      it("should prevent the event default behavior", function() {
        expect('submit').toHaveBeenPreventedOn(view.$element);
      });

      it("should create an investment", function() {
        expect(view.create).toHaveBeenCalled();
      });

      itShouldBeAtTheDefaultState();
    });

    describe("and when an investment is created", function() {
      var callbackSpy;
      var investment;

      beforeEach(function() {
        callbackSpy = jasmine.createSpy('callback');
        view.onCreate(callbackSpy);

        investment = view.create();
      });

      it("should invoke the 'onCreate' callback with the created investment", function() {
        expect(callbackSpy).toHaveBeenCalled();
        expect(callbackSpy).toHaveBeenCalledWith(investment);

        expect(callbackSpy.calls.any()).toBeTruthy();
        expect(callbackSpy.calls.mostRecent().args[0]).toBe(investment);
      });
    });

    describe("when the stock input is cleared", function() {
      beforeEach(function() {
        view.$element.find('.new-investment-stock-symbol').val('').trigger('change');
      });

      itShouldNotAllowToAdd();
    });

    describe("when the shares input is cleared", function() {
      beforeEach(function() {
        view.$element.find('.new-investment-shares').val('').trigger('change');
      });

      itShouldNotAllowToAdd();
    });

    describe("when the share price input is cleared", function() {
      beforeEach(function() {
        view.$element.find('.new-investment-share-price').val('').trigger('change');
      });

      itShouldNotAllowToAdd();
    });
  });

  // shared specs

  function itShouldNotAllowToAdd () {
    it("should not allow to add", function() {
      expect(view.$element.find('input[type=submit]')).toBeDisabled();
    });
  }

  function itShouldBeAtTheDefaultState () {
    it("should have an empty stock symbol", function() {
      expect(view.getSymbol()).toEqual('');
    });

    it("should have its shares value to zero", function() {
      expect(view.$element.find('.new-investment-shares')).toHaveValue('0');
    });

    it("should have its share price value to zero", function() {
      expect(view.$element.find('.new-investment-share-price')).toHaveAttr('value', '0');
    });

    it("should have its stock symbol input on focus", function() {
      expect(view.$element.find('.new-investment-stock-symbol')).toBeFocused();
    });

    itShouldNotAllowToAdd();
  }
});
