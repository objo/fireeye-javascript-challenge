var tableMaker = {

  table: function(row_data) {
    return "<table>" + this.rows(row_data) + "</table>";
  },

  rows: function(row_data) {
    if(row_data){
      rowsString = this.rowHeaders();
      // I ran into scoping issues when trying to use forEach here
      for(i = 0; i < row_data.length; i++) {
        current_value = row_data[i];
        rowsString += this.row(current_value.id ,
          this.cell(current_value.id) +
          this.cell(current_value.username) +
          this.cell(current_value.first_name + " " + current_value.last_name) +
          this.cell(current_value.email)
        );
      }
      return rowsString;
    }
    else {
      return "";
    };
  },

  rowHeaders: function() {
    return this.row(null,
      this.rowHeader("id") +
      this.rowHeader("username") +
      this.rowHeader("name") +
      this.rowHeader("email")
    );
  },

  row: function(id, contents) {
    if(id){
      return "<tr id='" + id + "'>" + contents + "</tr>";
    }
    else {
      return "<tr>" + contents + "</tr>";
    }

  },

  rowHeader: function(contents) {
    return "<th>" + contents + "</th>";
  },

  cell: function(contents) {
    return "<td>" + contents + "</td>";
  },

  render: function(row_data) {
    return this.table(row_data);
  }
}

$(document).ready(function() {

  $('.data-table').append(
    tableMaker.render(users.users)
  );

  $('table > tbody tr').eq(1).addClass('active');

  $('table.data-table > tbody tr').keynavigator();
})
