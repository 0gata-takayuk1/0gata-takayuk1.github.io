$(function(){
  $(".game").hover(
    function () {
    $(".game_list").css("display","block");}
    ,
    function () {
    $(".game_list").css("display","none");}
  );
});

$(function(){
  $(".game").hover(
    function () {
    $(".toTop").css("display","none");}
    ,
    function () {
    $(".toTop").css("display","block");}
  );
});
