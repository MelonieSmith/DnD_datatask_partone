function start()  {
  openPage.classList.toggle('hide');
  puzzleOne.classList.toggle('hide');
}
begin.onclick = start;

//Name question = Nominal or nominal
//Age question = Continuous or continuous
//Shoe Size question = Discrete or discrete

function checkIfLinedUp() {

  if (nameAnswer.value.toLowerCase() === 'nominal' && ageAnswer.value.toLowerCase() ===  "continuous" && shoesizeAnswer.value.toLowerCase() === "discrete") {
      finishPuzzleOne.classList.toggle('hide');
      window.scrollTo(0,document.body.scrollHeight); //if they are all correct show the next button
    }
  }
nameAnswer.onchange = checkIfLinedUp;
ageAnswer.onchange = checkIfLinedUp;
shoesizeAnswer.onchange = checkIfLinedUp;

//Graph question = Bar chart should be selected
function onAnswerOne()  {
  var ddl = document.getElementById("myList");
  var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "Select a graph")
   {
    alert("Please select a graph type.");
   }
    resultOne.textContent = 'Nope!';
    if (myList.value == 'Bar chart') {
        congratesMoveOnPuzzleOne.classList.toggle('hide');
        window.scrollTo(0,document.body.scrollHeight);
        resultOne.textContent = "Good Job!";
        }

  }


function movePuzzleTwo()  {
  puzzleOne.classList.toggle('hide');
  puzzleTwo.classList.toggle('hide');
  document.documentElement.scrollTop = 0;
}
moveToPuzzleTwo.onclick = movePuzzleTwo;

function submitAnswerTwo() {
  var radios = document.getElementsByName("choice");
  var len = radios.length;
  var checked = false;
  var userAnswer;
  for(i=0; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  }
  // if user click submit button without selecting any option, alert box
  //should be say "please select choice answer".


  if(!checked) {
    alert("please select choice answer");
    return;
  }
  // Correct answer

  if(userAnswer == "Lesley Lark") {
     finishPuzzleTwoButton.classList.toggle('hide');
     completePuzzleTwoButton.classList.toggle('hide');
     window.scrollTo(0,document.body.scrollHeight);
     resultTwo.textContent = "Good Job!";
  }
  // incorrect answer
  else {
     alert("Answer is wrong!");
  }
}

submitAnswerTwoButton.onclick = submitAnswerTwo;

function onCompletionPuzzleTwo()  {

  puzzleTwo.classList.toggle('hide')
  puzzleThree.classList.toggle('hide')
  document.documentElement.scrollTop = 0;

}
finishPuzzleTwoButton.onclick = onCompletionPuzzleTwo;
//hero can roll a 1 or a 2
//pigmy rolls 7
function onCompletionPuzzleThreeA()  {
  resultThree.textContent = 'Nope! Try again.';
  if (puzzleThreeAInput.value === '1'||puzzleThreeAInput.value === '2'||puzzleThreeAInput.value === 'one'||puzzleThreeAInput.value === 'two'||puzzleThreeAInput.value === 'One'||puzzleThreeAInput.value === 'Two') {
    //puzzleThreeAInput.classList.toggle('hide');
    resultThree.textContent = "Correct!";
    setTimeout(function(){puzzle3AQuestion.classList.toggle('hide')
                          puzzleThreeBtn.classList.toggle('hide');
                          }, 1000);
}
}

function onCompletionPuzzleThreeB()  {
  resultThree.textContent = 'Nope! Try again.'
  if (puzzleThreeBInput.value === '7' || puzzleThreeBInput.value === 'seven' || puzzleThreeBInput.value === 'Seven') {
    resultThree.textContent = "Correct Again!";
    setTimeout(function(){puzzle3BQuestion.classList.toggle('hide')
                          puzzleThreeBBtn.classList.toggle('hide');
                          window.scrollTo(0,document.body.scrollHeight);
                          }, 1000);
  }
}

puzzleThreeAInput.oninput = onCompletionPuzzleThreeA;
puzzleThreeBInput.oninput = onCompletionPuzzleThreeB;


function moveToPuzzleFour()  {
  puzzleThree.classList.toggle('hide');
  puzzleFour.classList.toggle('hide');
  document.documentElement.scrollTop = 0;
}
finishPuzzleThreePartBButton.onclick = moveToPuzzleFour;


//puzzle four
//the the 5 number summary is 10 14 17 20 25
//outliers = N
function checkPuzzleFour()  {
  resultFour.textContent = 'Nope! Try again.'
  if (puzzleFourInputPartOne.value == '10 14 17 20 25' &&
  puzzleFourInputPartTwo.value == 'N')  {
    finishPuzzleFourButton.classList.toggle('hide');
    puzzleFourBtn.classList.toggle('hide');
    window.scrollTo(0,document.body.scrollHeight);
    resultFour.textContent = "Good Job!";
  }
}
checkPuzzleFourAnswers.onclick = checkPuzzleFour;

function changeToPuzzleFive()  {
  puzzleFour.classList.toggle('hide');
  puzzleFive.classList.toggle('hide');
  document.documentElement.scrollTop = 0;
}
finishPuzzleFourButton.onclick = changeToPuzzleFive;

//puzzle 5
//the middle 66% range is 17-25
//They can harvest a maximum of 13 mushrooms
function checkPuzzleFive()  {
  resultFive.textContent = 'Nope! Try again.';
  if (puzzleFiveInputPartOne.value === '17-25' &&
  puzzleFiveInputPartTwo.value === '13')  {
    finishPuzzleFive.classList.toggle('hide');
    puzzleFiveButtons.classList.toggle('hide');
    window.scrollTo(0,document.body.scrollHeight);
    resultFive.textContent = "Good Job!";
  }
}
checkPuzzleFiveAnswers.onclick = checkPuzzleFive;
