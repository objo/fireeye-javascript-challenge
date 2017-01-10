describe('tableMaker', function() {

  describe('#render', function() {

    it('should render a table with no rows', function() {
      tableString = tableMaker.render();
      assert.equal("<table></table>", tableString );
      assert.ok(!tableString.includes("<tr>"));
    });

    it('should render a table with 1 row', function(){
      user = [{
        "display_name":null,
        "email":"tatum.efren@mandiant.foo",
        "first_name":"Tatum",
        "id":1,
        "last_name":"Efren",
        "username":"tefren"
      }]

      tableString = tableMaker.render(user);

      assert.ok(tableString.includes("<table>"));
      // checks for the table header
      assert.ok(tableString.includes("<th>id</th>"));
      assert.ok(tableString.includes("username"));
      assert.ok(tableString.includes("name"));
      assert.ok(tableString.includes("email"));

      // checks for the table contents
      assert.ok(tableString.includes("<td>1</td>"));
      assert.ok(tableString.includes("tefren"));
      assert.ok(tableString.includes("Tatum Efren<"));
      assert.ok(tableString.includes("tatum.efren@mandiant.foo"));
    });

    it('should render a table with multiple rows', function(){
      users = [{
        "display_name":null,
        "email":"tatum.efren@mandiant.foo",
        "first_name":"Tatum",
        "id":1,
        "last_name":"Efren",
        "username":"tefren"
      },{
        "display_name":null,
        "email":"gideon.oswald@mandiant.foo",
        "first_name":"Gideon",
        "id":2,
        "last_name":"Oswald",
        "username":"goswald"
      }]

      tableString = tableMaker.render(users);

      assert.ok(tableString.includes("tefren"));
      assert.ok(tableString.includes("Tatum Efren"));
      assert.ok(tableString.includes("2"));
      assert.ok(tableString.includes("goswald"));
      assert.ok(tableString.includes("Gideon Oswald"));
    });

  });

});
