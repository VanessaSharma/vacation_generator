$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    $('form#vacation').hide();
    event.preventDefault();
    var number1 = $("#cuisine-question").val();
    var number2 = $("#weather-question").val();
    var number3 = $("#pastime-question").val();
  
    if (number1 === "Mexican"||"Jamaican"||"Ethiopian"||"Japanese" && number2 === "Sunny"||"Hot"||"Scorching"||"Warm") {
      $('#Mexico').show();
    } 
    else if (number1 === "Indian"||"Thai"||"Peruvian"||"Columbian" && number2 === "Unpredictable"||"Crazy"||"Sunny") {
      $('#India').show();
    } 
    else if (number1 === "Carribean"||"Jamaica"||"Malaysian" && number3 === "Exploring nature"||"Hiking"||"Nature") {
      $('#Carribean').show();
    }
    else {
      $('#Sorry').show();
    }
  });
 });
