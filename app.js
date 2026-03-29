let scoreHome = 0;
let scoreAway = 0;
let timer;
let timeLeft = 1800; // 30 Menit dalam detik
let isRunning = false;

function record(team, type) {
    const timeNow = document.getElementById('match-timer').innerText;
    const log = document.getElementById('event-log');
    let msg = "";

    if (type === 'GOAL') {
        if (team === 'home') { scoreHome++; document.getElementById('score-home').innerText = scoreHome; }
        else { scoreAway++; document.getElementById('score-away').innerText = scoreAway; }
        msg = `GOAL! - ${team.toUpperCase()}`;
    } else {
        msg = `${type} - ${team.toUpperCase()}`;
    }

    // Tambah ke Log Kejadian
    const entry = document.createElement('li');
    entry.innerHTML = `<strong>[${timeNow}]</strong> ${msg}`;
    log.prepend(entry);
}

function toggleTimer() {
    const btn = document.getElementById('timer-btn');
    if (isRunning) {
        clearInterval(timer);
        btn.innerText = "START";
        btn.style.background = "#27ae60";
    } else {
        timer = setInterval(updateTimer, 1000);
        btn.innerText = "PAUSE";
        btn.style.background = "#c0392b";
    }
    isRunning = !isRunning;
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Babak Berakhir!");
        return;
    }
    timeLeft--;
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('match-timer').innerText = `${mins}:${secs}`;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 1800;
    isRunning = false;
    document.getElementById('match-timer').innerText = "30:00";
    document.getElementById('timer-btn').innerText = "START";
}
