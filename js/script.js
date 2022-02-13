/* 

{
    "name": "NAME",
    "english": "TRANSLATE"
},

*/

var Card = (function Card() {

 var units = {
    unit1: [
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
            "name": "matter",
            "english": "иметь значение"
        },
        {
            "name": "couple",
            "english": "пара"
        },
        {
            "name": "itself",
            "english": "само"
        },
        {
            "name": "recent",
            "english": "недавний"
        },
        {
            "name": "recently",
            "english": "недавно"
        },
        {
            "name": "describe",
            "english": "описывать"
        },
        {
            "name": "certain",
            "english": "определенный"
        },
        {
            "name": "less",
            "english": "меньший"
        },
        {
            "name": "involve",
            "english": "включать в себя"
        },
        {
            "name": "certainly",
            "english": "определенно"
        },
        {
            "name": "behaviour",
            "english": "поведение"
        },
        {
            "name": "foreign",
            "english": "иностранный"
        },
        {
            "name": "drop",
            "english": "падать"
        },
        {
            "name": "share",
            "english": "делиться"
        },
        {
            "name": "common",
            "english": "общий"
        },
        {
            "name": "concern",
            "english": "беспокойство"
        },
        {
            "name": "similar",
            "english": "похожий"
        },
        {
            "name": "accept",
            "english": "принимать"
        },
        {
            "name": "benefit",
            "english": "выгода"
        },
        {
            "name": "stage",
            "english": "этап"
        },
        {
            "name": "compare",
            "english": "сравнивать"
        },
        {
            "name": "above",
            "english": "сверх"
        },
        {
            "name": "impact",
            "english": "влияние"
        },
        {
            "name": "employee",
            "english": "работник"
        },
        {
            "name": "suddenly",
            "english": "внезапно"
        },
        {
            "name": "instead",
            "english": "вместо"
        },
        {
            "name": "compare",
            "english": "сравнение"
        },
        {
            "name": "agreemant",
            "english": "соглашение"
        },
        {
            "name": "call off",
            "english": "отмена"
        },
        {
            "name": "point out",
            "english": "указывать"
        },
        {
            "name": "item",
            "english": "пункт"
        },
        {
            "name": "vote",
            "english": "голосовать"
        },
        {
            "name": "negotiation",
            "english": "переговоры"
        },
        {
            "name": "condition",
            "english": "условие"
        },
        {
            "name": "pressure",
            "english": "давление"
        },
        {
            "name": "deal",
            "english": "сделка"
        },
        {
            "name": "decision",
            "english": "решение"
        },
        {
            "name": "melt",
            "english": "таять"
        },
        {
            "name": "helpfull",
            "english": "услужливый"
        },
        {
            "name": "fear",
            "english": "бояться"
        },
        {
            "name": "fair",
            "english": "справедливый"
        },
        {
            "name": "arrangement",
            "english": "местоположение"
        },
        {
            "name": "besides",
            "english": "кроме"
        },
        {
            "name": "outgoing",
            "english": "исходящий"
        },
        {
            "name": "kind",
            "english": "вид, добрый"
        },
        {
            "name": "honest",
            "english": "честный"
        },
        {
            "name": "jealous",
            "english": "завистливый"
        },
        {
            "name": "complain",
            "english": "жаловаться"
        },
        {
            "name": "fall a sleep",
            "english": "заснуть"
        },
        {
            "name": "excited",
            "english": "взволнованный, радостный"
        },
        {
            "name": "find out",
            "english": "выяснить"
        },
        {
            "name": "guess",
            "english": "догадка"
        },
        {
            "name": "improve",
            "english": "улучшать"
        },
        {
            "name": "weather forecast",
            "english": "прогноз погоды"
        },
        {
            "name": "still/until",
            "english": "до сих пор"
        },
        {
            "name": "leave",
            "english": "покидать"
        },
        {
            "name": "keep",
            "english": "хранить"
        },
        {
            "name": "mean",
            "english": "значит"
        },
        {
            "name": "metter",
            "english": "иметь значение"
        },
        {
            "name": "let",
            "english": "позволять"
        },
        {
            "name": "same",
            "english": "одинаковый"
        },
        {
            "name": "seem",
            "english": "казаться"
        },
        {
            "name": "might",
            "english": "может"
        },
        {
            "name": "against",
            "english": "против"
        },
        {
            "name": "such",
            "english": "так"
        },
        {
            "name": "case",
            "english": "случай"
        },
        {
            "name": "issure",
            "english": "проблема"
        },
        {
            "name": "hold",
            "english": "держать"
        },
        {
            "name": "bring",
            "english": "нести"
        },
        {
            "name": "must",
            "english": "должен"
        },
        {
            "name": "side",
            "english": "сторона"
        },
        {
            "name": "since",
            "english": "с"
        },
        {
            "name": "yet",
            "english": "пока что"
        },
        {
            "name": "among",
            "english": "среди"
        },
        {
            "name": "lose/lost",
            "english": "терять/потерянный"
        },
        {
            "name": "law",
            "english": "закон"
        },
        {
            "name": "almost",
            "english": "почти"
        },
        {
            "name": "set",
            "english": "устонавливать"
        },
        {
            "name": "at once",
            "english": "однажды"
        },
        {
            "name": "least",
            "english": "наименее"
        },
        {
            "name": "several",
            "english": "несколько"
        },
        {
            "name": "whatever",
            "english": "все равно/без разницы"
        },
        {
            "name": "allow",
            "english": "разрешать"
        },
        {
            "name": "research",
            "english": "исследование"
        },
        {
            "name": "himself",
            "english": "сам"
        },
        {
            "name": "across",
            "english": "через"
        },
        {
            "name": "able",
            "english": "способен"
        },
        {
            "name": "consider",
            "english": "рассматривать"
        },
        {
            "name": "actually",
            "english": "на самом деле/конечно"
        },
        {
            "name": "probably",
            "english": "вероятно"
        },
        {
            "name": "behind",
            "english": "сзади"
        },
        {
            "name": "reach/rich",
            "english": "достигать/богатый"
        },
        {
            "name": "remain",
            "english": "оставаться"
        },
        {
            "name": "suggest",
            "english": "предлагать"
        },
        {
            "name": "perhaps",
            "english": "возможно"
        },
        {
            "name": "former",
            "english": "бывший"
        },
        {
            "name": "require/demend",
            "english": "требовать"
        },
        {
            "name": "claim",
            "english": "запрос/требовать"
        },
        {
            "name": "effort",
            "english": "усилие"
        },
        {
            "name": "whole",
            "english": "целый"
        },
        {
            "name": "explain",
            "english": "объяснять"
        },
        {
            "name": "explaination",
            "english": "объяснение"
        },
        {
            "name": "whoever",
            "english": "кем бы ни был"
        },
        {
            "name": "recieve",
            "english": "получать"
        },
        {
            "name": "quite",
            "english": "довольно"
        },
    ],
    unit2: [
        {
            "name": "erase",
            "english": "стирать(из памяти)"
        }, 
        {
            "name": "knack",
            "english": "талант"
        },
        {
            "name": "pity",
            "english": "жалость"
        },
        {
            "name": "wise",
            "english": "мудрый"
        },
        {
            "name": "generous",
            "english": "щедрый"
        },
        {
            "name": "stubborn",
            "english": "упрямый"
        },
        {
            "name": "fix",
            "english": "чинить"
        },
        {
            "name": "mood",
            "english": "настроение"
        },
        {
            "name": "relief",
            "english": "облегчение"
        },
        {
            "name": "boring",
            "english": "скучный"
        },
        {
            "name": "cause",
            "english": "причинять"
        },
        {
            "name": "join",
            "english": "соединять"
        },
        {
            "name": "damage",
            "english": "повреждать"
        },
        {
            "name": "care",
            "english": "заботиться"
        },
        {
            "name": "fold",
            "english": "складывать"
        },
        {
            "name": "regret",
            "english": "сожалеть"
        },
        {
            "name": "lead",
            "english": "вести"
        },
        {
            "name": "promise",
            "english": "обещание"
        },
        {
            "name": "forces",
            "english": "усилие"
        },
        {
            "name": "farawell",
            "english": "прощание"
        },
        {
            "name": "shore",
            "english": "берег"
        },
        {
            "name": "knowledge",
            "english": "знание"
        },
        {
            "name": "groceries",
            "english": "продукты"
        },
        {
            "name": "tiny",
            "english": "крошечный"
        },
        {
            "name": "chores",
            "english": "работа по дому"
        },
        {
            "name": "agreed",
            "english": "договорились"
        },
        {
            "name": "laughing",
            "english": "смеяться"
        },
        {
            "name": "luckily",
            "english": "к счастью"
        },
        {
            "name": "successful",
            "english": "успешный"
        },
        {
            "name": "success",
            "english": "успех"
        },
        {
            "name": "afraid",
            "english": "бояться"
        },
        {
            "name": "puddle",
            "english": "лужа"
        },
        {
            "name": "tailwind",
            "english": "попутный ветер"
        },
        {
            "name": "approximately",
            "english": "приблизительно"
        },
        {
            "name": "schedule",
            "english": "график"
        },
        {
            "name": "beverage",
            "english": "напиток"
        },
        {
            "name": "rest",
            "english": "остаток"
        },
    ], 
  }

  var kanji;
  var $kanjifield;
  var $kanafield;
  var $translatefield;
  var $card;
  var $lng;
  var $unit;
  var $unitFlag = 1;
  var $unitTotal = 2; // условие на включительно
  var kanjilist;

  function init() {
    $lng = $('#lng');
    $unit = $('#unit');
    $kanjifield = $("#kanji");
    $kanafield = $("#kana");
    $translatefield = $("#translation");
    $translatefield.addClass('hidden');
    $card = $("#kanji");
    initUnitGenerate();
    start();
  }

  function initUnitGenerate() {
    kanjilist = units[`unit${$unitFlag}`];
    kanji = kanjilist;
  }

  function start() {
    $lng.html('<img src="img/start.png" alt="start">');
    newCard();
    unitCreate();
    handleLng();
    bindUI();
    $('#button-translate').addClass('hidden');
    $unit.addClass('hidden');
  }

  function bindUnit() {
    $unit.on('click', () => {
      if ($unitFlag < $unitTotal) {
        $unitFlag++;
        $unit.html(`<strong class="unit"> Unit ${$unitFlag} </strong>`);
        initUnitGenerate();
      } else {
        $unitFlag = 1;
        $unit.html(`<strong class="unit"> Unit ${$unitFlag} </strong>`);
        initUnitGenerate();
      }
    })
  }

  function unitCreate() {
    $unit.html(`<strong class="unit"> Unit ${$unitFlag} </strong>`);
    bindUnit();
  }

  function handleLng() {
    $lng.on('click', function(){
      $unit.removeClass('hidden');
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
})();

window.addEventListener("load", Card.init);