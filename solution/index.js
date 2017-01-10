module.exports.tableMaker = {

  table: function(row_data) {
    return "<table>" + this.rows(row_data) + "</table>";
  },

  rows: function(row_data) {
    if(row_data){
      rowsString = "";
      row_data.forEach(function(current_value) {
        rowsString += "<tr>"
        rowsString += "<td>" + current_value.id + "</td>";
        rowsString += "<td>" + current_value.username + "</td>";
        rowsString += "<td>" + current_value.first_name + " " + current_value.last_name + "</td>";
        rowsString += "<td>" + current_value.email + "</td>";
        rowsString += "</tr>"
      });
      return rowsString;
    }
    else {
      return "";
    };
  },

  render: function(row_data) {
    return this.table(row_data);
  }
}
