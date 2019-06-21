$(document).ready(function () {
    $("#account").click(function () {
        $("#up").slideToggle();
        $("#in").hide();
    });

    $("#sub").click(function () {
        alert("successful created an account with us")
        $("#in").slideToggle();
        $("#up").hide();
    });
$("#thanks").click(function() {
    alert("Congratulations! You have successfully created a comic.")
});
});