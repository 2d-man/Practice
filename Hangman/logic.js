let answer = '';
let answerState = [];
let mistakesCount = 0;
let lettersState;

startGame();

function startGame() {
  mistakesCount = 0;
  setDefaultKeyboard();
  drawPerson(mistakesCount);
  drawBoard(lettersState);
  generateWord();
}

function generateWord() {
  answer = dictionary[Math.floor(Math.random() * dictionary.length)];
  answerState.length = answer.length;
  answerState.fill('_ ');
  drawAnswerState(answerState);
}

function onKeyClick(letter) {
  
  if(mistakesCount === 7) {
    alert(answer);
    alert('Вы проиграли(');
    startGame();
    return;
  }
  
  let letterFromState;
  for (let i = 0; i < lettersState.length; i += 1) {
    if (letter === lettersState[i].char) {
      letterFromState = lettersState[i];
      break;
    }
  }
  
  if (!letterFromState.error && !answer.includes(letter)) {
    letterFromState.error = true;
    mistakesCount += 1;
  }
  
  if (!letterFromState.success && answer.includes(letter)) {
    letterFromState.success = true;
    for (let i = 0; i < answerState.length; i += 1) {
      if (letter === answer[i]) {
        answerState[i] = letter;
      }
    }
  }

  drawPerson(mistakesCount);
  drawBoard(lettersState);
  drawAnswerState(answerState);

  if (answer === answerState.join('')) {
    winGame();
  }
}

