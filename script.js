var KanjiArray = [
    {
        "name": "claim",
        "english": "требовать"
    }, 
    {
        "name": "broad",
        "english": "широкий"
    },
    {
        "name": "select",
        "english": "выбирать"
    },
    {
        "name": "property",
        "english": "собственность"
    },
    {
        "name": "noise",
        "english": "шум"
    },
    {
        "name": "opposite",
        "english": "противоположный"
    },
    {
        "name": "term",
        "english": "срок"
    },
    {
        "name": "smell",
        "english": "запах"
    },
    {
        "name": "evidence",
        "english": "доказательства"
    },
    {
        "name": "speech",
        "english": "речь"
    },
    {
        "name": "safe",
        "english": "безопасный"
    },
    {
        "name": "pick",
        "english": "выбирать"
    },
    {
        "name": "NAME",
        "english": "TRANSLATE"
    },
];


var Card = (function Card(kanjilist) {
  var kanji;
  var $kanjifield;
  var $kanafield;
  var $translatefield;
  var $card;

  function init() {
    $kanjifield = $("#kanji");
    $kanafield = $("#kana");
    $translatefield = $("#translation");
    $translatefield.addClass('hidden');
    $card = $("#kanji");
    kanji = kanjilist;
    bindUI();
    newCard();
  }
  
  
  function bindUI() {
    $card.on("click", handleClick);   
  }
  
  function newCard() {
    var newKanji = _.sample(kanji);
    $kanjifield.html(newKanji.name);
    $kanafield.html('<button type="button" id="button-translate" class="btn third">Translate</button>');
    $translatefield.html(newKanji.english);
    $buttonTranslate = $('#button-translate');
    $buttonTranslate.on("click", () => {
        $translatefield.removeClass('hidden');
    }); 

  }
  
  
  function handleClick() {
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
  
  
  var api = {
    init: init,
  }
  return api;
})(KanjiArray);


window.addEventListener("load", Card.init);