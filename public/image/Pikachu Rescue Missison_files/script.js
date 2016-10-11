$(document).ready(function() {
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
  var $pokemonImg = $('div .pokemon')
  var $right = $('.right h1')


  $td1.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('bulbasaur');
   $right.text('Bulbasaur');
   $pokemonImg.removeClass('pokemon').addClass('bulbasaurBattle');



 });

 $td2.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('tepig');
   $right.text('Tepig');
   $pokemonImg.removeClass('pokemon').addClass('tepigBattle');


 });

 $td4.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('eevee');
   $right.text('Eevee');
   $pokemonImg.removeClass('pokemon').addClass('eeveeBattle');


 });



 $td6.on('click', function() {
 alert('Add new home');
 $(this).removeClass('pokeball').addClass('charmander');
 $right.text('Charmander');
 $pokemonImg.removeClass('pokemon').addClass('charmanderBattle');


   });

 $td7.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('jigglypuff');
   $right.text('Jigglypuff');
   $pokemonImg.removeClass('pokemon').addClass('jigglypuffBattle');


 });

 $td9.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('gengar');
   $right.text('Gengar');
   $pokemonImg.removeClass('pokemon').addClass('gengarBattle');


 });

 $td10.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('victini');
   $right.text('Victini');
   $pokemonImg.removeClass('pokemon').addClass('victiniBattle');


 });

 $td13.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('caterpie');
   $right.text('Caterpie');
   $pokemonImg.removeClass('pokemon').addClass('caterpieBattle');


 });

 $td14.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('squirtle');
   $right.text('Squirtle');
   $pokemonImg.removeClass('pokemon').addClass('squirtleBattle');


 });

 $td16.on('click', function() {
   alert('Add new home');
   $(this).removeClass('pokeball').addClass('oshawott');
   $right.text('Oshawott');
   $pokemonImg.removeClass('pokemon').addClass('oshawottBattle');


 });




  function rolldice() {
    var min = 1;
    var max = 6;

  }

  // math.random(min, max)









});
