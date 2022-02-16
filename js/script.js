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
  var $flagStarting = true;
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
    UIpreloadStart();
  }

  function UIpreloadStart() {
    const $ = (s, o = document) => o.querySelector(s);
    const $$ = (s, o = document) => o.querySelectorAll(s);
    
    $$('.button').forEach(button => {
    
        let count = {
                number: 0
            },
            icon = $('.icon', button),
            iconDiv = $('.icon > div', button),
            arrow = $('.icon .arrow', button),
            countElem = $('span', button),
            svgPath = new Proxy({
                y: null,
                s: null,
                f: null,
                l: null
            }, {
                set(target, key, value) {
                    target[key] = value;
                    if(target.y !== null && target.s != null && target.f != null && target.l != null) {
                        arrow.innerHTML = getPath(target.y, target.f, target.l, target.s, null);
                    }
                    return true;
                },
                get(target, key) {
                    return target[key];
                }
            });
    
        svgPath.y = 30;
        svgPath.s = 0;
        svgPath.f = 8;
        svgPath.l = 32;
    
        button.addEventListener('click', e => {
            if(!button.classList.contains('loading')) {
    
                if(!button.classList.contains('animation')) {
    
                    button.classList.add('loading', 'animation');
    
                    gsap.to(svgPath, {
                        f: 2,
                        l: 38,
                        duration: .3,
                        delay: .15
                    });
    
                    gsap.to(svgPath, {
                        s: .2,
                        y: 16,
                        duration: .8,
                        delay: .15,
                        ease: Elastic.easeOut.config(1, .4)
                    });
    
                    gsap.to(count, {
                        number: '100',
                        duration: 3.8,
                        delay: .8,
                        onUpdate() {
                            countElem.innerHTML = Math.round(count.number) + '%';
                        }
                    });
    
                    setTimeout(() => {
                        iconDiv.style.setProperty('overflow', 'visible');
                        setTimeout(() => {
                            button.classList.remove('animation');
                        }, 600);
                    }, 4820);
    
                }
    
            } else {
    
                if(!button.classList.contains('animation')) {
    
                    button.classList.add('reset');
    
                    gsap.to(svgPath, {
                        f: 8,
                        l: 32,
                        duration: .4
                    });
    
                    gsap.to(svgPath, {
                        s: 0,
                        y: 30,
                        duration: .4
                    });
    
                    setTimeout(() => {
                        button.classList.remove('loading', 'reset');
                        iconDiv.removeAttribute('style');
                    }, 400);
    
                }
    
            }
            e.preventDefault();
        });
    
    });
    
    function getPoint(point, i, a, smoothing) {
        let cp = (current, previous, next, reverse) => {
                let p = previous || current,
                    n = next || current,
                    o = {
                        length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                        angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                    },
                    angle = o.angle + (reverse ? Math.PI : 0),
                    length = o.length * smoothing;
                return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
            },
            cps = cp(a[i - 1], a[i - 2], point, false),
            cpe = cp(point, a[i - 1], a[i + 1], true);
        return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
    }
    
    function getPath(update, first, last, smoothing, pointsNew) {
        let points = pointsNew ? pointsNew : [
                [first, 16],
                [20, update],
                [last, 16]
            ],
            d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
        return `<path d="${d}" />`;
    }
  }

  function initUnitGenerate() {
    kanjilist = units[`unit${$unitFlag}`];
    kanji = kanjilist;
  }

  function start() {
    $lng.html(`
    <button class="button">
        <svg class="circle" viewBox="0 0 76 76">
            <circle class="default" cx="38" cy="38" r="36"></circle>
            <circle class="active" cx="38" cy="38" r="36"></circle>
        </svg>
        <div class="icon">
            <svg class="line" viewBox="0 0 4 37">
                <line x1="2" y1="2" x2="2" y2="35"></line>
            </svg>
            <div>
                <svg class="arrow" viewBox="0 0 40 32"></svg>
                <svg class="progress" viewBox="0 0 444 10">
                    <path d="M2,5 L42,5 C60.0089086,6.33131695 73.3422419,6.99798362 82,7 C87.572404,7.00129781 91.0932494,1.72677301 102,1.99944178 C112.906751,2.27211054 112.000464,7.99986045 122,8 C131.999536,8.00013955 132,2 142,2 C152,2 152,8 162,8 C172,8 172,2 182,2 C192,2 192,8 202,8 C212,8 212,2 222,2 C232,2 232,8 242,8 C252,8 252,2 262,2 C272,2 272,8 282,8 C292,8 292,2 302,2 C312,2 312,8 322,8 C332,8 332,2 342,2 C352,2 351.897852,7.49489262 362,8 C372.102148,8.50510738 378.620177,5.22532154 402,5 L442,5"></path>
                </svg>
            </div>
        </div>
        <span>0%</span>
    </button>
    `);
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
    var resetTime = (function() {
        $flagStarting = false;
        $lng.on('click', function (){
            $unit.removeClass('hidden');
            $('.KanjiCard').addClass('bg-white');
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
    })
    var setTime = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                $lng.on('click', () => {
                    setTimeout(() => {
                        resetTime();
                    }, 6000);
                });
            }
        };
    })();
    setTime();
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