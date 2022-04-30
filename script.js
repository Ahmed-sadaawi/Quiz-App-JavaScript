// بسم الله الرحمن الرحيم


const questionsArray = [
// [0]
   {
      question: 'What is the most used programming language in 2019?',
      a: 'Java',
      b: 'C++',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd'
   },
   // [1]
   {
      question: 'Who is the President of US?',
      a: 'Florin Pop',
      b: 'Donald Trump',
      c: 'Ivan Saldano',
      d: 'Mihai Andrei',
      correct: 'b'
   },
   // [2]
   {
      question: 'What does HTML stand for?',
      a: 'Hypertext Markup Language',
      b: 'Cascading Style Sheet',
      c: 'Jason Object Notation',
      d: 'Helicopters Terminals Motorboats Lamborginis',
      correct: 'a'
   },
   // [3]
   {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b'
   }
   // [].lenght => 4
];
const answer = document.querySelectorAll('.answer');
const submit = document.getElementById('submit');
const questionTitle = document.querySelector('.question-title');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
let countIndex = 0;
let scores = 0;

onLoad()
function onLoad(){
   questionTitle.innerHTML = questionsArray[countIndex].question;
   aText.innerHTML = questionsArray[countIndex].a
   bText.innerHTML = questionsArray[countIndex].b
   cText.innerHTML = questionsArray[countIndex].c
   dText.innerHTML = questionsArray[countIndex].d
}

submit.addEventListener('click', submitClick, false);

function submitClick(){

   for(let i =0 ; i < answer.length; i++){
      if(answer[i].checked){

         if(answer[i].id === questionsArray[countIndex].correct){
            scores++;
         }

         answer[i].checked = false;
         countIndex++; // 1

         // The end;
         if(countIndex === questionsArray.length){

            let container = document.querySelector('.container');
            container.classList.add('space');

            container.innerHTML=
            `
            <h2>You answered correctly at ${scores} / ${questionsArray.length} questions.</h2>
            <input type="submit" value="Reload" class="submit" id="submit" onclick="location.reload()">

            `
         }
         onLoad()
      }
   }
}

// Thanks for watching❤️
