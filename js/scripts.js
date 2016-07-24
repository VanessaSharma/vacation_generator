$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();
    var number1 = $("#cuisine-question").val();
    var number2 = $("#weather-question").val();
    var number3 = $("#pastime-question").val();
    var result;
    if (number1 === "Mexican"||"Jamaican"||"Ethiopian"||"Japanese" && number2 === "Sunny"||"Hot"||"Scorching"||"Warm") {
        document.write("<img src='images/mexico.jpg' />");
    } else if (number1 === "Indian"||"Thai"||"Peruvian"||"Columbian" && number2 === "Unpredictable"||"Crazy"||"Sunny") {
      document.write("<img src='images/india.jpg' />");
    } else if (number1 === "Carribean"||"Jamaica"||"Malaysian" && number3 === "Exploring nature"||"Hiking"||"Nature")
      document.write("<img src='images/carribean.jpg' />");
    }
    
    $("#output").text(result);
});
});
