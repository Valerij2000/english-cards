var KanjiArray = [{}];
let unit = document.querySelector('[data-page]').getAttribute('data-page');

function getVords(unit) {
	return fetch(`https://english-cards-674c2-default-rtdb.firebaseio.com/${unit}.json`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((data) => {
			let arrKeys = Object.keys(data);
			let item;
			for (let i = 0; i < arrKeys.length; i++) {
				item = data[arrKeys[i]];
				KanjiArray.push(item);
			}
		});
}
getVords(unit);

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
		toggleLng();
		keydownNewCard();
	}

	function keydownNewCard() {
		document.addEventListener('keydown', function (event) {
			if (event.code == 'Space') {
				handleClick();
			}
		});
	}

	function toggleLng() {
		document.querySelector('[data-lng]').addEventListener('click', () => {
			newCard();
			document.querySelector('.usa').classList.toggle('hidden');
			document.querySelector('.ru').classList.toggle('hidden');
		})
	}


	function bindUI() {
		$card.on("click", handleClick);
	}

	function newCard() {
		var newKanji = _.sample(kanji);
		$kanafield.html('<button type="button" id="button-translate" class="btn third">Translate</button>');
		$buttonTranslate = $('#button-translate');
		$buttonTranslate.on("click", () => {
			$translatefield.removeClass('hidden');
		});
		if (document.querySelector('#ru').classList.contains('hidden')) {
			$kanjifield.html(newKanji.en);
			$translatefield.html(newKanji.ru);
		} else if (document.querySelector('#usa').classList.contains('hidden')) {
			$kanjifield.html(newKanji.ru);
			$translatefield.html(newKanji.en);
		}
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