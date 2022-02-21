const wordlist = document.querySelector('#wordlist');
const customWordArrEng = [];
const customWordArrRu = [];

// console.log(wordlist.rows[0].childNodes[1].innerText);
// console.log(wordlist.rows);

for (let i=0; i<wordlist.rows.length; i++) {
    for (let j=1; j<2; j++) {
        // console.log(wordlist.rows[i].childNodes[j].innerText);
        customWordArrEng.push(wordlist.rows[i].childNodes[j].innerText);
    }
    for (let j=2; j<3; j++) {
        // console.log(wordlist.rows[i].childNodes[j].innerText);
        customWordArrRu.push(wordlist.rows[i].childNodes[j].innerText);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
// shuffle(customWordArrEng);
// shuffle(customWordArrRu);

const associativeArray = customWordArrEng.reduce((acc, el, i) => {
  acc.push([el, customWordArrRu[i]]);
  return acc;
}, []);

shuffle(associativeArray);
console.log(associativeArray);

// console.log(customWordArrEng);
// console.log(customWordArrRu);