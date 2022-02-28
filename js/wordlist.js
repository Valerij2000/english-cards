const wordlist = document.querySelector('#wordlist');
const renderlist = document.querySelector('#renderlist');
const buttonDownload = document.querySelector('#button-download');
const buttonUpdateList = document.querySelector('#button-updatelist');
const customWordArrEng = [];
const customWordArrRu = [];
const $unitName = 'unit5';

// console.log(wordlist.rows[0].childNodes[1].innerText);
// console.log(wordlist.rows);

(function renderingLanguageArray() {
  for (let i = 0; i < wordlist.rows.length; i++) {
    for (let j = 1; j < 2; j++) {
      // console.log(wordlist.rows[i].childNodes[j].innerText);
      customWordArrEng.push(wordlist.rows[i].childNodes[j].innerText);
    }
    for (let j = 2; j < 3; j++) {
      // console.log(wordlist.rows[i].childNodes[j].innerText);
      customWordArrRu.push(wordlist.rows[i].childNodes[j].innerText);
    }
  }
}());

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// shuffle(customWordArrEng);
// shuffle(customWordArrRu);

const associativeArray = customWordArrEng.reduce((acc, el, i) => {
  acc.push([el, customWordArrRu[i]]);
  return acc;
}, []);

function filterWordsLimit(array) {
  const arrayLimit = [];
  const limit = 30;
  for (let i = 0; i < limit; i++) {
    arrayLimit.push(array[i]);
  }
  return arrayLimit;
}

function restructureObj(array) {
  const arrayCatalog = new Map(array);
  // в JSON
  const jsonStr = JSON.stringify([...arrayCatalog]);
  return jsonStr;
}

(function conditionSort() {
  const shuffleArray = shuffle(associativeArray);
  const filteredArray = filterWordsLimit(shuffleArray);
  (function renderView() {
    wordlist.style = 'display: none';
    for (let i = 0; i < filteredArray.length; i++) {
      let tr = document.createElement('tr');
      let td;
      for (let j = 0; j < 2; j++) {
        td = document.createElement('td');
        td.innerHTML = filteredArray[i][j];
        tr.appendChild(td);
      }
      renderlist.appendChild(tr);
    }
  }());
  // console.log(filteredArray);
  const restructure = restructureObj(filteredArray);
  buttonDownload.addEventListener('click', () => {
    downloadObjectAsJson(restructure, $unitName);
  })
  buttonUpdateList.addEventListener('click', () => {
    document.location.reload();
  })
  // console.log(restructure);
  // downloadObjectAsJson(restructure, $unitName);
}());

function downloadObjectAsJson(exportObj, exportName) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportObj);
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

// console.log(shuffleArray);

// console.log(customWordArrEng);
// console.log(customWordArrRu);