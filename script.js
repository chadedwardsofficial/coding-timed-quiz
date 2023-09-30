var startButton = document.getElementById("startButton");
var displayTimer = document.getElementById("displayTimer");
var question = document.querySelector(".question");
var options = document.querySelector(".options");
var currentQuestion = 0;
var time = 100;


var questions = [

  {
    Question: "Question1",
    Option: [
      "Option1",
      "Option2",
      "Option3",
      "Option4"
    ],
    Result: "Option3"


  },
  {
    Question: "Question2",
    Option: [
      "Option1",
      "Option2",
      "Option3",
      "Option4"
    ],
    Result: "Option3"

  },
  {
    Question: "Question3",
    Option: [
      "Option1",
      "Option2",
      "Option3",
      "Option4"
    ],
    Result: "Option2"

  },
  {
    Question: "Question4",
    Option: [
      "Option1",
      "Option2",
      "Option3",
      "Option4"
    ],
    Result: "Option1"
  },





]

var timerCount = setInterval(function () {
  time--;
  displayTimer.textContent = time;

  if (timeLeft === 0) {
    clearInterval(timerCount);
  }
}, 1000);





// function endGame(){
// clearInterval(timerCount)

// }



function checkAnswer(){

if (this.dataset.value === questions[currentQuestion].Result){
  currentQuestion++;

  
  
  showQuestion();



}
else {
  time -= 9;
  
}
if (time <= 0 || currentQuestion === questions.length){
endGame();
}
showQuestion();

};
  
function showQuestion() {
  question.textContent = questions[currentQuestion].Question;
  options.textContent='';
  for (i = 0; i < questions[currentQuestion].Option.length; i++) {
    var button = document.createElement('button');
    button.setAttribute("data-value", questions[currentQuestion].Option[i])
    button.textContent = questions[currentQuestion].Option[i]
    button.addEventListener("click", checkAnswer);
    options.appendChild(button);

  }



}


showQuestion();
















