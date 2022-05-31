const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c' 
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    }
];

const questionEl = document.querySelector('h2')
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitbtn = document.getElementById("submit")
const setInputDefault = document.querySelectorAll("input")
const main = document.querySelector(".quiz-container")





let currentQuiz = randomNum()
let arry = []
let score = 0

loadQuiz(currentQuiz)

function randomNum() {
    return Math.floor(Math.random() * quizData.length)
}

function loadQuiz(quiznum) {
    const currentQuizData = quizData[quiznum]

    questionEl.innerHTML = currentQuizData.question

    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

    setInputDefault.forEach((check) => {
        check.checked = false
    })
}

function checkAnswer() {
    let inputs = document.querySelectorAll("input")
    let answerData = undefined

    inputs.forEach((answer) => {
        if(answer.checked) answerData = answer.id
    })
    return answerData


}

submitbtn.addEventListener("click", () => {
    const answer = quizData[currentQuiz].correct
    const selectAnswer = checkAnswer()
    console.log(selectAnswer)

    if(!(selectAnswer)) return alert('請填入答案')

    if(selectAnswer === answer) score++
    
    if (arry.length < 5) {
        arry.push(currentQuiz)
        console.log(arry)
        while ((arry.includes(currentQuiz)) && (arry.length !== 5)) {
            currentQuiz = randomNum()
        }
    }
    if (arry.length === quizData.length) {
        main.innerHTML = `<h2> 你答對 ${score} / ${quizData.length} 題`
    }
    loadQuiz(currentQuiz)
})
