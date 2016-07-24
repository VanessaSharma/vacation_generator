$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();
    var number1 = $("#cuisine-question").val();
    var number2 = $("#weather-question").val();
    var number3 = $("#pastime-question").val();
    var result;
    if (number1 === "Mexican"  && number2 === "Sunny") {
        document.write("<img src='images/mexico.jpg' />");
    } else if (number1 === "Indian" && number2 === "Unpredictable") {
      document.write("<img src='images/india.jpg' />");
    } else if (number1 === "Carribean" && number3 === "Exploring nature") {
      document.write("<img src='images/carribean.jpg' />");
    }
    
    $("#output").text(result);
});
});
