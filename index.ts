import inquirer from "inquirer";
import inquire from "inquirer";

async function guessGame(){
    const systemNumber = Math.floor(Math.random() * 10);
    const userNumber = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter your number between 1-10"
        }
    ])
    const {userGuess} = userNumber;

    console.log("Your Guess:   ", userGuess, "\nSytem Guess:  " , systemNumber);


    if (userGuess === systemNumber){

        console.log("Your answer is Correct \n You Won! ");

    }
    else{

        console.log("Better Luck Next Time");
    }
}

async function startAgain() {
    
    do{
        await guessGame();

        var again = await inquirer.prompt({
            type: "input",
            name:"restart",
            message:"If you want to press playing press Y....."
        })
    }

    while(again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes")
}

startAgain();