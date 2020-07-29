function totalMarks() {
    var score = document.getElementsByName("marks");
    var totalScore = 0;
    for (i = 0; i < score.length; i++) {
        totalScore += Number(score[i].value);
    }

    return totalScore;
}
function results() {
    var totalMark = totalMarks();
    var percentage = ((totalMark / 600) * 100);
    document.getElementById('scores').innerHTML = "The totalMark is" + totalMark + "percentage is" + percentage;

    if (percentage <= 100 && percentage >= 80) {
        document.getElementById('result').innerHTML= "The result is Distinction";
    }
    else if (percentage >= 79 && percentage >= 60) {
        document.getElementById('result').innerHTML= "The result is First Class" ; 
    }
    else if (percentage >= 59 && percentage >= 45) {
        document.getElementById('result').innerHTML= "The result is Second Class";
    }
    else if (percentage >= 44 && percentage >= 35) {
        document.getElementById('result').innerHTML= "The result is Pass";
    }
    else {
        document.getElementById('result').innerHTML= "The result is Fail";
    }
}
