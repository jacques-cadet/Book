var service = "http://127.0.0.1:8000/router/entry/";
var trHTML = '';
var srch = '';
var node = 0;


function getAppointments() {

  $("#table").show();
  if (!node) {
    $.get(service, function(data) {
      $.each(data, function(index) {
        trHTML += '<tr><td>' + data[index].date + '</td><td>' + 
        data[index].time + '</td><td>' + data[index].description + '</td></tr>';
      });

      $('#location').append(trHTML);
    });
    // If the table has been populated change search button function
    node = 1; 
  } else {
    $("#search").click(function() {
      // Declare variables
      var input, filter, table, tr, td, i;
      input = document.getElementById("books_input");
      filter = input.value.toUpperCase();
      table = document.getElementById("table");
      tr = table.getElementsByTagName("tr");

      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    })
  }
};


$(document).ready(function() {

  $('#search').click(getAppointments);
  $("#table").hide();
  $("#form").hide();
  $("#new").show();
  $("#cancel").hide();
  $("#new").click(function() {
    $("#new").hide();
    $("#form").show();
    $("#cancel").show();
    $("#add").show();
  });
  $("#cancel").click(function() {
    $("#add").hide();
    $("#form").hide();
    $("#cancel").hide();
    $("#new").show();
  });
});