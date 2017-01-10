table = require('./index.js').tableMaker;


var assert = require('assert');
describe('Table', function() {

  describe('#render', function() {

    it('should render a table with no rows', function() {
      tableString = table.render();
      assert.equal("<table></table>", tableString );
      assert.ok(!tableString.includes("<tr>"));
    });

    it('should render a table with 1 row', function(){
      user = [{"display_name":null,"email":"tatum.efren@mandiant.foo","first_name":"Tatum","id":1,"last_name":"Efren","username":"tefren"}]

      tableString = table.render(user)

      assert.ok(tableString.includes("<table>"));
      assert.ok(tableString.includes("<td>1</td>"));
      assert.ok(tableString.includes("<td>tefren</td>"));
      assert.ok(tableString.includes("<td>Tatum Efren</td>"));
      assert.ok(tableString.includes("<td>tatum.efren@mandiant.foo</td>"));
      assert.ok(tableString.includes("</table>"));
    });

  });

});
