/* 

{
    "name": "NAME",
    "english": "TRANSLATE"
},

*/

var Card = (function Card() {

    var units = {
        unit1: [{
            name: '',
            english: ''
        }]
    }
    var kanji;
    var $kanjifield;
    var $kanafield;
    var $translatefield;
    var $card;
    var $lng;
    var $unit;
    var $unitFlag = 1;
    var $unitTotal = 5; // количество юнитов на странице (условие на включительно)
    var $pageCount = 4; // страницы (включительно)
    var $pagenow = null;
    var kanjilist;
    var $progressStart;
    var $renderContent;

    function init() {
        $renderContent = $('#rendering-words-list');
        $progressStart = $('#progress');
        $modal = $('#modal');
        $lng = $('#lng');
        $unit = $('#unit');
        $kanjifield = $("#kanji");
        $kanafield = $("#kana");
        $translatefield = $("#translation");
        $translatefield.addClass('hidden');
        $card = $("#kanji");
        selectPage();
        renderJSONUnits();
        initUnitGenerate();
        start();
        UIpreloadStart();
        keydownNewCard();
    }

    function keydownNewCard() {
        document.addEventListener('keydown', function(event) {
            if (event.code == 'Space') {
                handleClick();
            }
        });
    }

    function selectPage() {
        for (let i = 1; i <= $pageCount; i++) {
            if ($(".wrapper").data("page") === i) {
                $pagenow = i;
            }
        }
    }

    function renderJSONUnits() {
        let arrayUnits;
        const jsonUnitsNumber = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5'];
        for (let i = 0; i < jsonUnitsNumber.length; i++) {
            $.getJSON(`../json/page-${$pagenow}/${jsonUnitsNumber[i]}.json`, function(data) {
                // console.log(data);
                arrayUnits = [];
                units[jsonUnitsNumber[i]] = arrayUnits;
                for (let j = 0; j < data.length; j++) {
                    arrayUnits.push(
                        new Object({
                            name: data[j][0],
                            english: data[j][1]
                        })
                    );
                }
            });
        }
    }

    function modalWordsList() {
        $modal.removeClass('hidden');
        renderingWordsList(kanji);
    }

    function renderingWordsList(list) {
        for (let i = 0; i < list.length; i++) {
            let words = `
                <span class="list-words"> ${list[i].name} - ${list[i].english}</span> 
            `;
            $renderContent.append(words);
        }
    }

    function cleanrModalWordsList() {
        $renderContent.empty();
        modalWordsList();
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
                        if (target.y !== null && target.s != null && target.f != null && target.l != null) {
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
                if (!button.classList.contains('loading')) {
                    if (!button.classList.contains('animation')) {
                        button.classList.add('loading', 'animation');
                        setTimeout(() => {
                            iconDiv.style.setProperty('overflow', 'visible');
                            setTimeout(() => {
                                button.classList.remove('animation');
                            }, 600);
                        }, 4820);
                    }
                } else {
                    if (!button.classList.contains('animation')) {
                        button.classList.add('reset');
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
        newCard();
        unitCreate();
        buttonProgressStart();
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
                cleanrModalWordsList();
            } else {
                $unitFlag = 1;
                $unit.html(`<strong class="unit"> Unit ${$unitFlag} </strong>`);
                initUnitGenerate();
                cleanrModalWordsList();
            }
        })

        $lng.on('click', async function gen() {
            initUnitGenerate();
            cleanrModalWordsList();
        })
    }

    function unitCreate() {
        $unit.html(`<strong class="unit"> Unit ${$unitFlag} </strong>`);
        bindUnit();
    }

    function buttonProgressStart() {
        $progressStart.html(`
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
        </button>
        `);
        $progressStart.on('click', () => {
            setTimeout(() => {
                $progressStart.addClass('hidden');
                $lng.html(`
                    <div class="lng-en">
                        <img src="../img/usa.png" id="usa" class="usa" alt="usa">
                    </div>
                    <div class="lng-ru">
                        <img src="../img/ru.png" id="ru" class="ru" alt="ru">
                    </div>
                `);
                $('.lng-en').on('click', () => {
                    flagChoice('en');
                })
                $('.lng-ru').on('click', () => {
                    flagChoice('ru');
                })
            }, 6000);
        })
    }

    function flagChoice(flag) {
        modalWordsList();
        $unit.removeClass('hidden');
        if (flag == 'en') {
            $lng.html('<img src="../img/ru.png" id="ru" class="ru" alt="ru">');
            newCard('english', 'name');
            $translatefield.addClass('hidden');
        } else {
            $lng.html('<img src="../img/usa.png" id="usa" class="usa" alt="usa">');
            newCard('name', 'english');
            $translatefield.addClass('hidden');
        }
        handleLng();
    }

    function handleLng() {
        $lng.on('click', choiceLanguage);

        function choiceLanguage() {
            $unit.removeClass('hidden');
            if ($(this).html() == '<img src="../img/usa.png" id="usa" class="usa" alt="usa">') {
                $(this).html('<img src="../img/ru.png" id="ru" class="ru" alt="ru">');
                newCard('english', 'name');
                $translatefield.addClass('hidden');
            } else {
                $(this).html('<img src="../img/usa.png" id="usa" class="usa" alt="usa">');
                newCard('name', 'english');
                $translatefield.addClass('hidden');
            }
        }
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