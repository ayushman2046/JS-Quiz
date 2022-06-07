var quizadata = [
        {
            question :'Which frame work is related to javaScript?',
            a : '.net',
            b : 'flask',
            c : 'react',
            d : 'django',
            correct : 'c'
        },
        {
            question :'Which is not a programming language?',
            a : 'HTML',
            b : 'C++',
            c : 'Java',
            d : 'JavaScript',
            correct : 'a'
        },
        {
            question :'Which is not a framework?',
            a : 'react',
            b : 'javaScript',
            c : 'angular',
            d : 'django',
            correct : 'b'
        },
        {
            question :'CSS stands for?',
            a : 'cascading style sheet',
            b : 'cascading style state',
            c : 'communication system server',
            d : 'None',
            correct : 'a'
        }
]

var quiz = document.getElementById('quiz')
var questions = document.getElementById('question')
var answer = document.querySelectorAll('.answer')
var optiona = document.getElementById('a_value')
var optionb = document.getElementById('b_value')
var optionc = document.getElementById('c_value')
var optiond = document.getElementById('d_value')
var submitbtn = document.getElementById('submit')

var currentquestion = 0
var quizscore = 0
loadquiz();
function loadquiz()
{
    deselect();
    // console.log(optiona)
    questions.innerHTML = quizadata[currentquestion].question
    optiona.innerHTML = quizadata[currentquestion].a
    optionb.innerHTML = quizadata[currentquestion].b
    optionc.innerHTML = quizadata[currentquestion].c
    optiond.innerHTML = quizadata[currentquestion].d

}

function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectoption;~
    answer.forEach(answer=>{
        if(answer.checked){
            selectoption = answer.id
        }
    })
    console.log(selectoption)
    if(selectoption===quizadata[currentquestion].correct){
        quizscore+=1;
    }
    currentquestion+=1
    if(currentquestion===quizadata.length){
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizscore} out of ${quizadata.length}`
    }
    else{
        loadquiz()
    }
})