$(document).ready(function(){
  $("#theButton").click(function(){
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var eMail = $("#eMail").val();
    var result = firstName + " " + lastName + " " + eMail + "!";
    $(".modalText").append(result);
    $("#theButton").toggle("modal");
  });
});
