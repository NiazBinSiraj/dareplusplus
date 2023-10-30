var player1Name = "";
var player2Name = "";
var whosTurn = "";
var dares = [];

document.getElementById("setName").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    player1Name = document.getElementById("player1").value;
    player2Name = document.getElementById("player2").value;
    whosTurn = player1Name;
    await readFile();

    document.getElementById("setName").classList.add("d-none");
    document.getElementById("game").classList.remove("d-none");
    document.getElementById("whosTurn").innerHTML = whosTurn;
});

function nextTurn() {
    toggleWhosTurn();
    document.getElementById("dare").innerHTML = getDare();
}

function toggleWhosTurn() {
    if (whosTurn == player1Name) {
        whosTurn = player2Name;
    } else {
        whosTurn = player1Name;
    }
    document.getElementById("whosTurn").innerHTML = whosTurn;
}

function getDare() {
    var randomIndex = Math.floor(Math.random() * dares.length);
    return dares[randomIndex];
}

async function readFile() {
    const fileInput = document.getElementById("fileInput");
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileContent = e.target.result;
            const stringArray = fileContent.split("\n"); // Split the content into an array by newline character
            dares = stringArray;
            document.getElementById("dare").innerHTML = getDare();
        };

        reader.readAsText(file);
    } else {
        alert("Please select a file to read.");
    }
}