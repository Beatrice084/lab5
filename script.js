
// $("#professionalSelect").on('change', function() { 
//   console.log("HEEEEEEEEEEERE")
//   $('.dateInput').datepicker({
//     beforeShowDay: $.datepicker.noWeekends
//   });
// });

// $('#professionalSelect').change(function(){
//   $('.datepicker').datepicker("destroy");
//   if ($(this).val() != 0) {
//     $('.datepicker').datepicker({
//       beforeShowDay: $.datepicker.noWeekends
//     });
//   } else {
//     $('.datepicker').datepicker();
//   }
// })
// $("#professionalSelect").trigger('change');
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
  // Sunday is Day 0, disable all Sundays
  if (date.getDay() == 3)
      return [false];
  var string = jQuery.datepicker.formatDate(setDateFormat, date);
  return [ unavailableDates.indexOf(string) == -1 ]
}

$(document).ready(function() {
  $("#professionalSelect").change(function() {
      console.log("HERE")
      console.log()
      if ($(this).val() == 0) {
          $("#datepicker").datepicker("destroy");
          $('#datepicker').datepicker({
            beforeShowDay: $.datepicker.noWeekends
          });
      }
      else if ($(this).val() == 1){
        $("#datepicker").datepicker("destroy");
        $('#datepicker').datepicker(
          {
            beforeShowDay: disableDates
          }
        );
      }
      else if ($(this).val() == 2){
        $("#datepicker").datepicker("destroy");
        $('#datepicker').datepicker(
          {
            beforeShowDay: function(date) {
              // Sunday is Day 0, disable all Sundays
              if (date.getDay() == 4)
                  return [false];
              var string = jQuery.datepicker.formatDate(setDateFormat, date);
              return [ unavailableDates.indexOf(string) == -1 ]
            }
          }
        );
      }
      else if ($(this).val() == 3){
        $("#datepicker").datepicker("destroy");
        $('#datepicker').datepicker(
          {
            beforeShowDay: function(date) {
              // Sunday is Day 0, disable all Sundays
              if (date.getDay() == 5)
                  return [false];
              var string = jQuery.datepicker.formatDate(setDateFormat, date);
              return [ unavailableDates.indexOf(string) == -1 ]
            }
          }
        );
      }
      else if ($(this).val() == 4){
        $("#datepicker").datepicker("destroy");
        $('#datepicker').datepicker(
          {
            beforeShowDay: function(date) {
              // Sunday is Day 0, disable all Sundays
              if (date.getDay() == 2)
                  return [false];
              var string = jQuery.datepicker.formatDate(setDateFormat, date);
              return [ unavailableDates.indexOf(string) == -1 ]
            }
          }
        );
      }
  }).change();
});



$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}