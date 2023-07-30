const computer = [
     {
        question: `What is the most used programing language in 2023 ?`,
        a: `Java`,
        b: `C`,
        c: `Python`,
        d: `JavaScript`,
        correct: `d`
    }, {
        question: `Who is the president of US ?`,
        a: `Donald Trump`,
        b: `Joe Biden`,
        c: `Rahul Gandhi`,
        d: `Rishi Sunak`,
        correct: `b`        
    } , {

        question: `What does HTML stand for ?`,
        a: `Java`,
        b: `Copywrite`,
        c: `Hypertext Markup Language`,
        d: `JavaScript`,
        correct: `c`

    } , {
        question: `What year was Javascript launch ?`,
        a: `1993`,
        b: `1995`,
        c: `1994`,
        d: `None of the above`,
        correct: `b`
    }
]

const gk = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Neptune",
        correct: "b"
      },
      {
        question: "What is the chemical symbol for water?",
        a: "H2O",
        b: "CO2",
        c: "O2",
        d: "N2",
        correct: "a"
      },
      {
        question: "What is the capital of Japan?",
        a: "Tokyo",
        b: "Beijing",
        c: "Seoul",
        d: "Bangkok",
        correct: "a"
      },
      {
        question: "Who is the author of the Harry Potter book series?",
        a: "J.R.R. Tolkien",
        b: "J.K. Rowling",
        c: "George R.R. Martin",
        d: "Stephen King",
        correct: "b"
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        a: "China",
        b: "Japan",
        c: "South Korea",
        d: "Thailand",
        correct: "b"
      }
]
const topicEl = document.getElementsByName("topic");
const startBtn = document.getElementById("start");
const topicVa  = document.getElementById("topic");

let quizData =[];
startBtn.addEventListener("click", () => {
    topicEl.forEach((value) => {
        if(value.checked){
    
             if(value.id === 'gk'){
              quizData = gk;
            }else{
                 quizData = computer;
            }

             console.log(quizData);
        };
       
    });
    topicVa.classList.add("vanish");
    quiz.classList.remove("vanish");
    quiz
    loadQuiz();
});


const answerEl = document.getElementsByName("answer");

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("questionEl");
const a_text = document.getElementById(`a_text`);
const b_text = document.getElementById(`b_text`);
const c_text = document.getElementById(`c_text`);
const d_text = document.getElementById(`d_text`);
const submitBtn = document.getElementById("submit");

const retryEl = document.getElementById("retry");
const resubmitBtn = document.getElementById("resubmit");



let currentQuiz = 0;
let score = 0;
let wrongQuestion = [];
let rescore = 0;
let retest = false;
let i = 0;



function loadQuiz() {    


    const currentQuizData = quizData[currentQuiz];
    console.log("load  "+ quizData);
    questionEl.innerHTML = currentQuizData.question;
a_text.innerHTML = currentQuizData.a;
b_text.innerHTML = currentQuizData.b;
c_text.innerHTML = currentQuizData.c;
d_text.innerHTML = currentQuizData.d;

}

function clearedChecked () {
    answerEl.forEach((answer) => {
        if(answer.checked){           
            answer.checked = false;
        }
    });
}

// function getSelected() {
    
//     let answer = undefined;
//     answerEl.forEach((answerE) => {
//         if(answerE.checked) {
//             answer =  answerE.id; 
//         }
//     });
    
// }

submitBtn.addEventListener("click", () => {      

    // check to see the answer
    
    answerEl.forEach((answer) => {
        if(answer.checked) {
            if(answer.id === quizData[currentQuiz].correct){
            score++;  
        }else {
            wrongQuestion.push(currentQuiz);
        }
        
    }
    });


    answerEl.forEach((answer) => {
        if(answer.checked){           
            currentQuiz++;
           
            clearedChecked();
        }});

    
    
    
    if(currentQuiz < quizData.length){ 
        loadQuiz();
    
  }else {
    // todo: show results
   
    if(wrongQuestion.length !== 0){
    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
    <button onclick="location.reload()">Reload</button>
    <button onclick= "reattemptFun()">Reattempt Wrong questions </button>`;
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
      <button onclick="location.reload()">Reload</button>`;
    }

    
  }



  });

  


  function reattemptFun () {
    console.log(wrongQuestion);
  
     quiz.classList.add("vanish");
    retryEl.classList.remove("vanish");
    currentQuiz = wrongQuestion[i];
    console.log(currentQuiz);
    loadReQuiz();
    
  }

  const reanswerEl = document.getElementsByName("reanswer");

  const requestionEl = document.getElementById("requestionEl");
const rea_text = document.getElementById(`rea_text`);
const reb_text = document.getElementById(`reb_text`);
const rec_text = document.getElementById(`rec_text`);
const red_text = document.getElementById(`red_text`);

function loadReQuiz() {
    const currentQuizData = quizData[currentQuiz];

    requestionEl.innerHTML = currentQuizData.question;
rea_text.innerHTML = currentQuizData.a;
reb_text.innerHTML = currentQuizData.b;
rec_text.innerHTML = currentQuizData.c;
red_text.innerHTML = currentQuizData.d;

}

  resubmitBtn.addEventListener("click" , () => {
   
  

    reanswerEl.forEach((answer) => {
        if(answer.checked) {
            if(answer.id === quizData[currentQuiz].correct)
            rescore++;  
       
         }
    });


    reanswerEl.forEach((answer) => {
        if(answer.checked){           
            i++;
           
            answer.checked = false;
        }});
        currentQuiz = wrongQuestion[i];

        console.log("i "+ i);
        console.log("wrong"+ wrongQuestion.length);

       
      if(i >= wrongQuestion.length) {
        // todo: show results
       
        retryEl.innerHTML = `<h2>You answered correctly at ${rescore}/${wrongQuestion.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
        `;
      }else {
        loadReQuiz();
      }



    console.log("hell resubmit");
  })



  

