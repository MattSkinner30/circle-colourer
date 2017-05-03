var $input = $('#colour-picker');
var $form = $('form');
var $ball = $('.ball');

$input.on('change', function () {

  $ball.css('background-color', $input.val());
});
