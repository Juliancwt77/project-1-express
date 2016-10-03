$(document).ready(function () {
    alert("Everything is ready, let's do this");

    var $td1 = $('#td1')
    var $td2 = $('#td2')
    var $td3 = $('#td3')
    var $td4 = $('#td4')
    var $td5 = $('#td5')
    var $td6 = $('#td6')
    var $td7 = $('#td7')
    var $td8 = $('#td8')
    var $td9 = $('#td9')
    var $td10 = $('#td10')
    var $td11 = $('#td11')
    var $td12 = $('#td12')
    var $td13 = $('#td13')
    var $td14 = $('#td14')
    var $td15 = $('#td15')
    var $td16 = $('#td16')
    var $pokemonImg =$('div .pokemon')
    var $right = $('.right h1')



    $td1.on('click', function () {
      alert('Add new home');
    $(this).removeClass('pokeball').addClass('bulbasaur');
    $right.text('Bulbasaur');
    $pokemonImg.removeClass('pokemon').addClass('bulbasaurBattle');



});

$td2.on('click', function () {
  alert('Add new home');
$(this).removeClass('pokeball').addClass('tepig');
$right.text('Tepig');
$pokemonImg.removeClass('pokemon').addClass('tepigBattle');


});

$td7.on('click', function () {
  alert('Add new home');
$(this).removeClass('pokeball').addClass('jigglypuff');
$right.text('Jigglypuff');
$pokemonImg.removeClass('pokemon').addClass('jigglypuffBattle');


});



  function rolldice () {
    var min = 1;
    var max = 6;

  }

  // math.random(min, max)















    });
