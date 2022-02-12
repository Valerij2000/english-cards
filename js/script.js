/* 

{
    "name": "NAME",
    "english": "TRANSLATE"
},

*/

var Card = (function Card(kanjilist) {
  var kanji;
  var $kanjifield;
  var $kanafield;
  var $translatefield;
  var $card;
  var $lng;
  var $start

  function init() {
    $start = $('#start');
    $lng = $('#lng');
    $kanjifield = $("#kanji");
    $kanafield = $("#kana");
    $translatefield = $("#translation");
    $translatefield.addClass('hidden');
    $card = $("#kanji");
    kanji = kanjilist;
    start();
    
  }

  function start() {
    $lng.html('<img src="img/start.png" alt="start">');
    newCard();
    handleLng();
    bindUI();
    $('#button-translate').addClass('hidden');
  }

  function handleLng() {
    $lng.on('click', function(){
      if ($(this).html() == '<img src="img/usa.png" id="usa" class="usa" alt="usa">') {
        $(this).html('<img src="img/ru.png" id="ru" class="ru" alt="ru">');
        newCard('english', 'name');
        $translatefield.addClass('hidden');
      } else {
        $(this).html('<img src="img/usa.png" id="usa" class="usa" alt="usa">');
        newCard('name', 'english');
        $translatefield.addClass('hidden');
      }
    });
  }
  
  function bindUI() {
    $card.on("click", handleClick);   
  }
  
  function newCard(param1, param2) {
    var newKanji = _.sample(kanji);
    $kanjifield.html(newKanji[param1]);
    $kanafield.html('<button type="button" id="button-translate" class="btn third">Translate</button>');
    $translatefield.html(newKanji[param2]);
    $buttonTranslate = $('#button-translate');
    $buttonTranslate.on("click", () => {
        $translatefield.removeClass('hidden');
    }); 
  }
  
  function handleClick() {

    newCard('english', 'name');

    if ($('#usa').hasClass('usa')) {
      newCard('name', 'english');
      rotate();
    } else {
      newCard('english', 'name');
      rotate();
    }

    function rotate() {
      $translatefield.addClass('hidden');
      var tl = new TimelineMax();
      tl.to($card, .3, {
        rotationY: 90
      });
      tl.add(newCard);
      tl.to($card, .3, {
        rotationY: 0
      });
    }

   
  }
  
  
  var api = {
    init: init,
  }
  return api;
})(KanjiArray);


window.addEventListener("load", Card.init);