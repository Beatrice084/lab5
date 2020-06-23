
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
  // Sunday is Day 0, disable all Sundays
  if (date.getDay() == 3 || date.getDay() ==0 || date.getDay() == 6)
      return [false];
  var string = jQuery.datepicker.formatDate(setDateFormat, date);
  return [ unavailableDates.indexOf(string) == -1 ]
}

function validatePhone(txtPhone) {
  var a = document.getElementById(txtPhone).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var filter = /^([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})$/;
  if (filter.test(a)) {
      return true;
  }
  else {
      return false;
  }
}


function validateCard(cardNumber) {
  var a = document.getElementById(cardNumber).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var filter = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;
  if (filter.test(a)) {
      return true;
  }
  else {
      return false;
  }
}

$("#errorText").hide();
$("#creditAlert").hide();

$(document).ready(function() {
  $("#phone").change("change", function(){
    if (!validatePhone("phone")){
      $("#errorText").show();
    }
    else {
      $("#errorText").hide();
    }
  })

  $("#cardNum").change("change", function(){
    if (!validateCard("cardNum")){
      $("#creditAlert").show();
    }
    else {
      $("#creditAlert").hide();
    }
  })

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
              if (date.getDay() == 4 || date.getDay() ==0 || date.getDay() == 6)
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
              if (date.getDay() == 5 || date.getDay() ==0 || date.getDay() == 6)
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
              if (date.getDay() == 2 || date.getDay() ==0 || date.getDay() == 6)
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