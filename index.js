const checkQuestionAnswer = (question,correctAnswer) =>{
    let userAnswer = prompt(question)
    if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()){
        alert('Ответ верный')}
        else {
        alert('Ответ неверный')
    }
}


checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");
