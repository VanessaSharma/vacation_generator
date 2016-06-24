$(document).ready(function() {
  $("form#vacation").submit(function() {
    event.preventDefault();
    var number1 = $("#q1").val();
    var number2 = $("#q2").val();
    var number3 = $("#q3").val();
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