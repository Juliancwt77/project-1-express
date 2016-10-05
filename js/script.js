$(document).ready(function() {


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
  var $pikaImg = $('div .pikachu')
  var $right = $('.right h1')
  var $left = $('.left h1')
  var $dicebutton = $('#battle')
  var $startButton = $('#start')
  var widthpika = 100;
  var widthpokemon = 100;
  var exp = 0;

  var mainM = new Audio('music/main-theme.mp3');
  var battleM = new Audio('music/battle.mp3');
  var evolvedM = new Audio('music/pokemon-evolved.mp3');
  var endM = new Audio('music/ending-theme.mp3');
  var winM = new Audio('music/win.mp3');
  var loseM = new Audio('music/lose.mp3');
  var potionM = new Audio('music/potion.mp3');

  function music() {

    mainM.loop = true;
      mainM.play();

}

   function pauseMusic() {

       mainM.pause();
       mainM.currentTime = 0;

    }

//
music();

  function battlemusic() {

    battleM.loop = true;
      battleM.play();


   }

   function pauseBattlemusic() {

       battleM.pause();
       battleM.currentTime = 0;

    }

    function evolvedMusic() {

      evolvedM.play();


    }

    function endMusic() {

      endM.loop = true;
        endM.play();

    }

    function pauseEndMusic() {

        endM.pause();
        endM.currentTime = 0;

    }


        function winMusic() {

          winM.play();


        }

        function loseMusic() {

          loseM.play();


        }

        function potionMusic() {

          potionM.play();


        }




    function reset() {

    location.reload();

  }








  $td1.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {
    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');

    $(this).removeClass('pokeball').addClass('bulbasaur');
    $right.text('Bulbasaur');
    $pokemonImg.removeClass().addClass('bulbasaurBattle');

}

  });

  $td2.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {

    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('tepig');
    $right.text('Tepig');
    $pokemonImg.removeClass().addClass('tepigBattle');

}

  });

  $td4.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {
    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('eevee');
    $right.text('Eevee');
    $pokemonImg.removeClass().addClass('eeveeBattle');

}
  });



    $td6.on('click', function() {

      if ( !$(this).hasClass('pokeball')) {


        alert('Please choose another box');


      }


      else {
    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('charmander');
    $right.text('Charmander');
    $pokemonImg.removeClass().addClass('charmanderBattle');

}
  });

  $td7.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {
    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('jigglypuff');
    $right.text('Jigglypuff');
    $pokemonImg.removeClass().addClass('jigglypuffBattle');

}
  });

  $td9.on('click', function() {

    // if ( !$(this).hasClass('pokeball')) {
    //
    //
    //   alert('Please choose another box');
    //
    //
    // }


    // else {
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('gengar');
    $right.text('Gengar');
    $pokemonImg.removeClass().addClass('gengarBattle');

// }
  });

  $td10.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {
    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('victini');
    $right.text('Victini');
    $pokemonImg.removeClass().addClass('victiniBattle');

}
  });

  $td13.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {
    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('caterpie');
    $right.text('Caterpie');
    $pokemonImg.removeClass().addClass('caterpieBattle');

  }

  });

  $td14.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {
    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('squirtle');
    $right.text('Squirtle');
    $pokemonImg.removeClass().addClass('squirtleBattle');
}

  });

  $td16.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {
    pauseMusic();
    battlemusic();
    alert('You have encountered another Pokemon. Click button to battle!');
    $(this).removeClass('pokeball').addClass('oshawott');
    $right.text('Oshawott');
    $pokemonImg.removeClass().addClass('oshawottBattle');
  }

  });

  $td5.on('click', function() {



    pauseBattlemusic();
    pauseMusic();
    endMusic();


    $(this).removeClass().addClass('ash');
    $right.text('Ash');
    $pokemonImg.removeClass().addClass('ashWin');


    alert('Congratulations! You have found Ash. Click the "Start Game" button to start a new game');






  });

  $td3.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {
    pauseMusic();
    pauseBattlemusic();
    potionMusic();
    alert('Congratulations! You have found a potion. Pikachu health increase by 1');
    $(this).removeClass().addClass('potion');
    var width = 0;
    move3();

  }

  });

  $td8.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {

    pauseMusic();
    pauseBattlemusic();
    potionMusic();
    alert('Congratulations! You have found a potion. Pikachu health increase by 1');
    $(this).removeClass().addClass('potion');
    var width = 0;
    move3();

  }

  });


  $td11.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {

    pauseMusic();
    pauseBattlemusic();
    potionMusic();
    alert('Congratulations! You have found a potion. Pikachu health increase by 1');
    $(this).removeClass().addClass('potion');
    var width = 0;
    move3();

  }

  });

  $td12.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {

    alert('Congratulations! You have found a potion. Pikachu health increase by 1');

    pauseMusic();
    pauseBattlemusic();
    potionMusic();
    $(this).removeClass().addClass('potion');
    var width = 0;
    move3();

  }

  })

  $td15.on('click', function() {

    if ( !$(this).hasClass('pokeball')) {


      alert('Please choose another box');


    }


    else {

    alert('Congratulations! You have found a potion. Pikachu health increase by 1');

    pauseMusic();
    pauseBattlemusic();
    potionMusic();
    $(this).removeClass().addClass('potion');
    var width = 0;
    move3();

  }

  })



  function rolldice() {

    var $die1 = $("#die1");
    var $die2 = $("#die2");
    var $d1 = Math.floor(Math.random() * 6) + 1;
    var $d2 = Math.floor(Math.random() * 6) + 1;
    var elem1 = document.getElementById("healthPokemon");
    var elem = document.getElementById("healthPikachu");
    var elem3 = document.getElementById("expPikachu");

    $die1.text($d1);
    $die2.text($d2);




    if ($d2 > $d1) {
      console.log('Enemy wins');
      move();

    } else if ($d1 > $d2) {
      console.log('Pikachu wins');

      move2();

    }

    if (elem1.style.width <= 0 + '%') {

      alert('Pikachu wins!, Click another box to continue');

      // pauseBattlemusic();
      // winMusic();

      widthpokemon  = 100;

      elem1.style.width = widthpokemon + '%';

      // document.getElementById('healthPokemon').reset();

      experience();
      evolve();






    }else if (elem.style.width <= 0 + '%') {

      pauseBattlemusic()
      loseMusic();
      alert('Pikachu has fainted!, click "Start Game" button to start a new game');

      }



  }

  $dicebutton.on('click', function() {

    rolldice();

    console.log("click");

  })


    $startButton.on('click', function() {

      reset();

      alert('Ash is missing and Pikachu has to find him. Help Pikachu find Ash before he is defeated by other pokemon hidden in the map')

      })







  function move() {

    var elem = document.getElementById("healthPikachu");
    widthpika -= 10;

    elem.style.width = widthpika  + '%';

  }

  function move2() {

    var elem1 = document.getElementById("healthPokemon");
    console.log("Element 1", elem1);

    widthpokemon  -= 10;

    elem1.style.width = widthpokemon + '%';


  }

  function move3() {

    var elem = document.getElementById("healthPikachu");

    widthpika += 10;

    elem.style.width = widthpika + '%';


  }

  function experience() {

    var elem3 = document.getElementById("expPikachu");

    exp += 100;

    elem3.style.width = exp + '%';


  }

  function evolve() {

    var elem3 = document.getElementById("expPikachu");



    if (elem3.style.width = 100 + '%') {

        $pikaImg.removeClass('pikachu').addClass('raichu');
        var elem = document.getElementById("healthPikachu");

        $left.text('Raichu');

        pauseBattlemusic()
        evolvedMusic();


        widthpika += 50;

        elem.style.width = widthpika + '%';

        alert('Pikachu has eveloved into Raichu!');


  }
  }


});
