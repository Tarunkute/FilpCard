const board = document.getElementById("game-board");
let cards = [];
let flipped = [];
let matches = 0;
let attempts = 0;
let startTime = Date.now();

function init() {
    const values = [...Array(8).keys(), ...Array(8).keys()].sort(() => 0.5 - Math.random());
    values.forEach(val => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = val;
        card.innerText = "?";
        card.onclick = () => flipCard(card);
        board.appendChild(card);
        cards.push(card);
    });
}

function flipCard(card) {
    if (card.classList.contains("flipped") || flipped.length === 2) return;

    card.innerText = card.dataset.value;
    card.classList.add("flipped");
    flipped.push(card);

    if (flipped.length === 2) {
        attempts++;
        if (flipped[0].dataset.value === flipped[1].dataset.value) {
            matches++;
            flipped = [];
            if (matches === 8) {
                alert("You won in " + attempts + " attempts!");
                document.getElementById("attempts").value = attempts;
                document.getElementById("timeTaken").value = Math.floor((Date.now() - startTime) / 1000);
            }
        } else {
            setTimeout(() => {
                flipped.forEach(c => {
                    c.innerText = "?";
                    c.classList.remove("flipped");
                });
                flipped = [];
            }, 1000);
        }
    }
}

function submitScore() {
    document.getElementById("attempts").value = attempts;
    document.getElementById("timeTaken").value = Math.floor((Date.now() - startTime) / 1000);
}

init();