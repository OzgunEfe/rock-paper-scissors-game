var choices = ['r', 'p', 's'];

var winningConditions = ['pr', 'sp', 'rs'];

var equalConditions = ['rr', 'ss', 'pp'];

var computerScore = 0;
var UserScore = 0;

alert("Welcome to Rock, Paper and Scissors Game!");
alert("You need to write 'r' for Rock, 'p' for Paper and 's' for Scissors.")

for (; true;) {
    var compChoice = choices[Math.floor(Math.random() * choices.length)]

    var userChoice = prompt("Please enter r, p or s");

    userChoice = userChoice.toLowerCase();

    if (userChoice == "") {
        continue;
    } else if (!userChoice) {
        document.body.innerText = "Game terminated!"
        break;
    }

    var userResult = userChoice + compChoice;
    var computerResult = compChoice + userChoice;

    console.log(userResult);

    if (userResult == equalConditions[0] || userResult == equalConditions[1] || userResult == equalConditions[2]) {
        alert("This is a tie. You chose the same item as the computer.")
    } else if (userResult == winningConditions[0] || userResult == winningConditions[1] || userResult == winningConditions[2]) {
        newUserScore = UserScore + 1
        alert("You win! Your Score: " + newUserScore)
        UserScore = newUserScore;
    } else if (computerResult == winningConditions[0] || computerResult == winningConditions[1] || computerResult == winningConditions[2]) {
        newcomputerScore = computerScore + 1
        alert("Computer win! Computer Score: " + newcomputerScore)
        computerScore = newcomputerScore;
    } else {
        alert("Please enter only one of these letters 'r', 'p' or 's'.")
    }


    if (UserScore === 10) {
        alert("You won the game! Thanks for playing!");
        break;
    } else if (computerScore === 10) {
        alert("Computer won the game! Thanks for playing!");
        break;
    }

}








