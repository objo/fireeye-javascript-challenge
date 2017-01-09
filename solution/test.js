table = require('./index.js').tableMaker;


var assert = require('assert');
describe('Table', function() {
  describe('#render', function() {
    it('should render a table with no rows', function() {
      assert.equal("<table></table>", table.render() );
    });
  });
});
