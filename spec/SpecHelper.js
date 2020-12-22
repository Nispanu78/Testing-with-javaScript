// The addMatchers function accepts a single parameter—an object where each attribute corresponds to a new matcher. The function being defined here is not the matcher itself but a factory function to build the matcher. Its purpose, once called is to return an object containing a compare function, as follows:

beforeEach(function() {
  // changes the default timeout for demonstration purposes
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  jasmine.addMatchers({
    toBeAGoodInvestment: function () {

      return {
        compare: function (actual, expected) {
          var result = {};
          result.pass = actual.isGood();

          if (result.pass) {
            result.message = 'Expected investment to be a bad investment';
          } else {
            result.message = 'Expected investment to be a good investment';
          }

          return result;
        }
      };
    }
  });
});

jasmine.getFixtures().fixturesPath = 'spec/fixtures';
