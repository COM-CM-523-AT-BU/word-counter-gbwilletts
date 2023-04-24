// put your globals here - hint: select elements from the HTML

const textArea = document.querySelector("#text-area");
const countBtn = document.querySelector("#countBtn");
const wordCount = document.querySelector("#wordCountInput");
const findWordInput = document.querySelector("#findWordInput");
const findBtn = document.querySelector("#findBtn");
const wordFoundInput = document.querySelector("#wordFoundInput");


// dont' forget to add event listeners to teh buttons

countBtn.addEventListener("click", countWords);
findBtn.addEventListener('click', findWords);

function countWords() {
  // your code here

const str = textArea.value;
const textArr = str.split(" ");
  

  // call printData

  printData(textArr.length, wordCount);

}

function findWords() {
  // put your local variable for the empty array here
  let foundWords = [];
  // remainder of your code follows
  const str = textArea.value;
  const textArr = str.split(" ");

textArr.forEach(item => {
  if (item == findWordInput.value) {
    foundWords.push(item);
  }
});

 
  // call printData
  printData(foundWords.length, wordFoundInput);
}

// change param1 and param2 to identifiers that make sense
function printData(data, destination) {
  // your code here... one line!
  destination.value = data 
}
