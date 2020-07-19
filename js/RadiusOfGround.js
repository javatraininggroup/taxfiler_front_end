function showPerformance() {
    var totalRuns = Number(document.getElementById('totalRunscm').value);
    var currentMatchRuns = Number(document.getElementById('totalRunsc').value);
    var totalMatches = Number(document.getElementById('totalMatches').value);
    var totalballs = Number(document.getElementById('ballsPlayed').value);
    var outs = Number(document.getElementById('outs').value);
    var notouts = Number(document.getElementById('notouts').value);
    var strikeRate = (currentMatchRuns / totalballs) * 100;
    var battingAverage = (totalRuns / outs) - (totalRuns / (totalMatches - notouts));
    if (battingAverage < 10) {
        document.getElementById('result').innerHTML = "strikeRate:" + strikeRate + "<br> batting Average:" +
         battingAverage+"<br>Bowler";
    }
   else if (battingAverage>10 && battingAverage<20) {
        document.getElementById('result').innerHTML = "strikeRate:" + strikeRate + "<br> batting Average:" +
         battingAverage+"<br>Bowler but can be Batsmen"
    }
    else if (battingAverage>20 && battingAverage<30) {
        document.getElementById('result').innerHTML = "strikeRate:" + strikeRate + "<br> batting Average:" +
         battingAverage+"<br>Average Batsmen";
    }
    else if (battingAverage>30 && battingAverage<40) {
        document.getElementById('result').innerHTML = "strikeRate:" + strikeRate + "<br> batting Average:" +
         battingAverage+"<br>Good Batsmen";
    }
    else if (battingAverage>40 && battingAverage<50) {
        document.getElementById('result').innerHTML = "strikeRate:" + strikeRate + "<br> batting Average:" +
         battingAverage+"<br>Very Good Batsmen";
    }
    else {
        document.getElementById('result').innerHTML = "strikeRate:" + strikeRate + "<br> batting Average:" +
         battingAverage+"<br>Exceptionally Best Batsmen";
    }
}