var startButton = document.getElementById("startButton");
var displayTimer = document.getElementById("displayTimer");
var question = document.querySelector(".question");
var options = document.querySelector(".options");
var currentQuestion = 0;
var time = 100;


var questions = [

  {
    Question: "What does HTML stand for?",
    Option: [
      "Hippos That Might Lie",
      "Helium Thyme Magnesium Lint",
      "Hyper Markup Text Language",
      "Happening That May Lamp"
    ],
    Result: "Hyper Markup Text Language"


  },
  {
    Question: "What does the <a> tag stand for?",
    Option: [
      "Paragraph Tag",
      "Header Tag",
      "Anchor Tag",
      "Footer Tag"
    ],
    Result: "Anchor Tag"

  },
  {
    Question: "In CSS what does a # selector stand for?",
    Option: [
      "ID",
      "Value",
      "Class",
      "Src"
    ],
    Result: "ID"

  },
  {
    Question: "What does mkdir mean in Git Bash",
    Option: [
      "Open a file",
      "Create a Folder/Directory",
      "Push commits",
      "Adds comments"
    ],
    Result: "Create a Folder/Directory"
  },
  {
    Question: "What syntax do you use to select an element by it's ID, in javascript",
    Option: [
      "var document.getElementbyID()",
      "var document.queryselector()",
      "var function()",
      "document.textcontent = ''"
    ],
    Result: "var document.getElementbyID()"
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
if (time === 0 || currentQuestion === questions.length){

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
















