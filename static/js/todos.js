
var service = "http://127.0.0.1:8000/router/entry/";
var trHTML = '';
var search = 0;


function getAppointments() {

  // Show hidden table
  $("#table").show();

  // If the table has not been populated show table 
  // via search button, search "off"
  if (!search) {

    // "Get" the appointments from db
    $.get(service, function(data) {

      //Loop through database and create table rows and data
      $.each(data, function(index) {

        // Format date for table output
        var mergdedDate = new Date(data[index].date +' '+ data[index].time);

        var monthNames = [
          "Jan", "Feb", "Mar",
          "Apr", "May", "Jun", "Jul",
          "Aug", "Sep", "Oct",
          "Nov", "Dec"
        ];

        // Return formatted date
        function formatDate() {

          var date = mergdedDate.getDate();
          var month = mergdedDate.getMonth();
          var year = mergdedDate.getFullYear();

          return  monthNames[month] + ' ' + date + ', ' + year;
        }

        // Return formatted time
        function formatTime() {

          var day = mergdedDate.getDay();
          var min = mergdedDate.getMinutes();
          var hour = mergdedDate.getHours();
          var am_pm = "";

          //If the hour is passed 11 show pm else am
          if(hour > 11){
            am_pm = "pm"
          }else{
            am_pm = "am"
          }

          // If the min is 9 or less prefix 0 to min, 09
          if (min < 10){
            min = '0'+ min
          }

          // If the hour is 13 or more subtract 12. 17:30 to 5:30
          if (hour >= 13){
            hour -= 12;
            return  hour + ':' + min + ' ' + am_pm;
          }

          return  hour + ':' + min + ' ' + am_pm;
        }

        date = formatDate()
        time = formatTime()

        trHTML += '<tr><td>' + date + '</td><td>' + time + 
        '</td><td>' + data[index].description + '</td></tr>';

      });

      // Link to id'd hmtl tag
      $('#location').append(trHTML);
      
    });

    // If the table has been populated change search "on"
    search = 1; 
  } 
  if(search) {

    $("#search").click(function() {

      var input, filter, table, tableRow, tableData, index;

      input = document.getElementById("books_input");
      filter = input.value.toUpperCase(); // For casesensitive search remove toUpperCase
      table = document.getElementById("table");
      tableRow = table.getElementsByTagName("tr");

      // Loop through all table rows, and hide those who don't match the search query
      for (index = 0; index < tableRow.length; index++) {

        tableData = tableRow[index].getElementsByTagName("td")[2];

        // If the table has data
        if (tableData) {

          // For casesensitive search remove toUpperCase
          if (tableData.innerHTML.toUpperCase().search(filter) > -1) {

            tableRow[index].style.display = "";
          } else {
            tableRow[index].style.display = "none";
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