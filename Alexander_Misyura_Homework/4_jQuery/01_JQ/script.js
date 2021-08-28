$(document).ready(function ($) {
  $("#pass_1").blur(function () {
    password = $('#pass_1').val();
    re_password = $('#pass_2').val();
    
    if (password != re_password || password == 0 || re_password == 0) {
      $("input[type=password]").css("borderColor", "red");
      $(".send_data").attr("disabled", "").attr("title", "Проверьте правильность ввода пароля")
    }
    else {
      $("input[type=password]").css("borderColor", "green");
      $(".send_data").removeAttr("disabled").removeAttr("title")
    }
  })
  $("#pass_2").blur(function () {
    re_password = $('#pass_2').val();
    password = $('#pass_1').val();
    $("input[type=password]").css("borderColor", "green");
    if (password != re_password || password == 0 || re_password == 0) {
      $("input[type=password]").css("borderColor", "red");
      $(".send_data").attr("disabled", "").attr("title", "Проверьте правильность ввода пароля")
    }
    else {
      $("input[type=password]").css("borderColor", "green");
      $(".send_data").removeAttr("disabled").removeAttr("title")
    }
  })
})
