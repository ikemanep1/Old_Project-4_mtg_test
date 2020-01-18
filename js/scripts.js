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
      $(".result").children("p").first().remove();
      $('.result').prepend('<p>You are a white planeswalker. You value order and society, at the expense of individualism.</p>');
      $(".result").show();
    } else if (results > 5 && results <= 10 ) {
      $(".result").children("p").first().remove();
      $('.result').prepend('<p>You are a blue planeswalker. You value knowledge and perfection, at the expense of raw power.</p>');
      $(".result").toggle();
    } else if (results > 10 && results <= 15 ) {
      $(".result").children("p").first().remove();
      $('.result').prepend('<p>You are a black planeswalker. You value power and excess, at the expense of morality.</p>');
      $(".result").toggle();
    } else if (results > 15 && results <= 20 ) {
      $(".result").children("p").first().remove();
      $('.result').prepend('<p>You are a red planeswalker. You value passion and freedom, at the expense of order.</p>');
      $(".result").toggle();
    } else if (results > 20 && results <= 25 ) {
      $(".result").children("p").first().remove();
      $('.result').prepend('<p>You are a green planeswalker. You value instinct and adaptation, at the expense of technology.</p>');
      $(".result").toggle();
    } else {
   alert('Please fill out the entire form.');
 }
  });
});
