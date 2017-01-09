module.exports.tableMaker = {

  table: function(row_data) {
    return "<table>" + this.rows(row_data) + "</table>";
  },

  rows: function(row_data) {
    if(row_data){
      return "<tr><td></td></tr>";
    }
    else {
      return "";
    };
  },

  render: function(row_data) {
    return this.table();
  }
}
