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

async function nextTurn() {
    toggleWhosTurn();
    document.getElementById("dare").innerHTML = await getDare();
}

function toggleWhosTurn() {
    if (whosTurn == player1Name) {
        whosTurn = player2Name;
    } else {
        whosTurn = player1Name;
    }
    document.getElementById("whosTurn").innerHTML = whosTurn;
}

async function getDare() {
    var randomIndex = Math.floor(Math.random() * dares.length);
    return dares[randomIndex];
}

async function readFile() {
    const fileInput = document.getElementById("fileInput");
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = async function(e) {
            const fileContent = e.target.result;
            const stringArray = fileContent.split("\n"); // Split the content into an array by newline character
            dares = stringArray;
            document.getElementById("dare").innerHTML = await getDare();
        };

        reader.readAsText(file);
    } else {
        //alert("Please select a file to read.");
        dares = [
              "Give your partner a passionate 30-second kiss.",
              "Whisper your favorite fantasy in your partner's ear.",
              "Give your partner a slow, seductive back massage.",
              "Feed each other something sweet while blindfolded.",
              "Send your partner a steamy voice message.",
              "Dance sensually together to a romantic song.",
              "Write a love note on your partner’s body with your finger.",
              "Remove one piece of your partner’s clothing using only your teeth.",
              "Trace your partner’s lips with your finger and then kiss them slowly.",
              "Tell your partner three things you want to do to them tonight.",
              "Have a mini make-out session with your partner in the darkest room.",
              "Give your partner a lap dance to a slow song.",
              "Play a game of strip rock-paper-scissors (best of 3).",
              "Kiss your partner in five different places other than their lips.",
              "Whisper something naughty into your partner's ear.",
              "Let your partner tie you up for 2 minutes and do whatever they want (consensually).",
              "Text your partner something flirty while sitting right next to them.",
              "Let your partner explore your body blindfolded for 1 minute.",
              "Describe a romantic fantasy you’d love to try together.",
              "Share your favorite intimate memory with your partner.",
              "Kiss every inch of your partner’s neck.",
              "Gently bite your partner’s earlobe and whisper something naughty.",
              "Run an ice cube along your partner’s body slowly.",
              "Let your partner remove an item of your clothing, their choice.",
              "Kiss your partner passionately while holding their hands against the wall.",
              "Blindfold your partner and kiss them in random places.",
              "Have a 1-minute make-out challenge without using your hands.",
              "Let your partner draw something on your back with their fingers — you guess it.",
              "Pretend you're strangers at a bar and flirt for 5 minutes.",
              "Compliment your partner in the sexiest voice you can."
        ];

        document.getElementById("dare").innerHTML = await getDare();
        reader.readAsText(file);
    }
}
