// front end
$(document).ready(function() {
  $("form#mtg_test").submit(function(event) {
    event.preventDefault();
    var resolution = parseInt($("#conflict_resolution").val());
    var weapon = parseInt($("input:radio[name=weapon]:checked").val());
    var society = parseInt($("#society_preference").val());
    var companion = parseInt($("#companionship").val());
    var identity = parseInt($("#ideology").val());
    var results = resolution + weapon + society + companion + identity;
    if (results > 0 && results <= 5) {
      $(".result").text("You are a white planeswalker. You value order and society, at the expense of individualism.");
    } else if (results > 5 && results <= 10 ) {
      $(".result").text("You are a blue planeswalker. You value knowledge and perfection at the expense of sheer power.");
    } else if (results > 10 && results <= 15 ) {
      $(".result").text("You are a black planeswalker. You value power and excess at the expense of morality.");
    } else if (results > 15 && results <= 20 ) {
      $(".result").text("You are a red planeswalker. You value passion and freedom at the expense of order.");
    } else if (results > 20 && results <= 25 ) {
      $(".result").text("You are a green planeswalker. You value nature and instinct at the expense of technology.");
    } else {
   alert('Please fill out the entire form.');
 }
  });
});
