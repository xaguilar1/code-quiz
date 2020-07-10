var container = document.querySelector(".container");
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#startButton");
var questions = 0;
var count = 60; //giving the user 60 seconds total when timer starts 
var x = 0;
var score = 0;


function startTimer() {
  startBtn.addEventListener("click", function () {
    countDown();
    questionLoop();
  });

}
startTimer();

function countDown() {
  var counting = setInterval((function () {
    count--;
    if (count <= 0) {
      clearInterval(counting);
      count = 0;
      allDone();
    }
    if ( x >= myQuestions.length) {
      clearInterval(counting);
      allDone();
    
    }
    timer.innerHTML = count;
  }), 1000);
}

function questionLoop() {
  container.innerHTML = "";
  var nextQuestion = document.createElement("h2");
  nextQuestion.innerHTML = myQuestions[x].question;
  container.appendChild(nextQuestion);

  for (i = 0; i < myQuestions[x].answers.length; i++) {
    var answerChoices = document.createElement("button");
    answerChoices.innerHTML = myQuestions[x].answers[i];
    container.appendChild(answerChoices);
    answerChoices.addEventListener("click", function (event) { //the click itself //target: what click targets
      if (event.target.innerHTML === myQuestions[x].correctAnswer) {
        x++;
        questionLoop();
        console.log("right");
        console.log(x);
      } else {
        count = count - 5;
        x++;
        questionLoop();
        console.log("wrong");
      }
    });
  }

}

function allDone() {
  container.innerHTML = "";
  var allDoneText = document.createElement("h2");
  allDoneText.innerHTML = "All Done";
  container.appendChild(allDoneText);
  for (i = 0; i < myQuestions[x].answers.length; i++) {
    var answerChoices = userScore.score;
    answerChoices.innerHTML = myQuestions[x].answers[i];
    container.appendChild(answerChoices);
    answerChoices.addEventListener("click", function (event) { 
      if (event.target.innerHTML === myQuestions[x].correctAnswer) {
        x++;
        finalScore();
      }
    })
  }
}

function finalScore() {
   if (myQuestions[x] === true) {
     score++;
     var userScore = document.createElement("h3");
     userScore.innerHTML = "Your Final Score" + score;
     container.appendChild(userScore);
     var f = document.createElement("form");
     f.setAttribute('method',"post");
     f.setAttribute('action',"submit.php");
     
     var i = document.createElement("input"); //input element, text
     i.setAttribute('type',"text");
     
     
     var s = document.createElement("input"); //input element, Submit button
     s.setAttribute('type',"submit");
     
     
     f.appendChild(i);
     f.appendChild(s);
     
     
     document.getElementsByTagName('body')[0].appendChild(f);
        
  }
}



var myQuestions = [
  {
    question: "What are the 3 main languages in web development?",
    answers: [
      "a: C++, C#, Crystal",
      "b: Python, javascript, css",
      "c: html, css, javascript",
      "d: html, css, java",
    ],
    correctAnswer: "c: html, css, javascript"
  },
  {
    question: "Which coding language allows you to style the web page, such as add color to a certain page or text?",
    answers: [
      "a: CSS",
      "b: html",
      "c: javascript",
      "d: java",
    ],
    correctAnswer: "a: CSS"
  },
  
  {
    question: "Items in a(n) ___ list are preceded by numbers.",
    answers: [
      "a: unordered list",
      "b: bulleted list",
      "c: ordered list",
      "d: group list",
    ],
    correctAnswer: "c: ordered list"
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "a: Custom Style Sheets",
      "b: Colorful Style Sheets",
      "c: Crazy Style Sheets",
      "d: Cascading Style Sheets",
    ],
    correctAnswer: "d: Cascading Style Sheets"
  },
  {
    question: "A ___ allows users to move from one webpage to another.",
    answers: [
      "a: browser",
      "b: video",
      "c: HTML",
      "d: hyperlink",
    ],
    correctAnswer: "d: hyperlink"
  },
  {
    question: "Where is the correct place to put the title tag in an HTML document?",
    answers: [
      "a: Above the HTML tag",
      "b: In the head of the document",
      "c: In the body of the document",
      "d: It doesn't matter",
    ],
    correctAnswer: "b: In the head of the document",
  },
  {
    question: "How do you add a comment in a CSS file?",
    answers: [
      "a: /* this is a comment */",
      "b: // this is a comment //",
      "c: // this is a comment",
    ],
    correctAnswer: "c: // this is a comment"
  },
  {
    question: "The # symbol specifies that the selector is?",
    answers: [
      "a: class",
      "b: tag",
      "c: first",
      "d: id",
    ],
    correctAnswer: "d: id"
  },

];

