// Get Elements
const displayOne = document.querySelector(".displayOne");
const displayTwo = document.querySelector(".displayTwo");

const playerInputOne = document.querySelector(".playerInputOne");
const playerInputTwo = document.querySelector(".playerInputTwo");

const massegeOne = document.querySelector(".massegeOne");
const massegeTwo = document.querySelector(".massegeTwo");

const requireMessageOne = document.querySelector(".requireMessageOne");
const requireMessageTwo = document.querySelector(".requireMessageTwo");

const WinLoseGame = document.querySelector(".WinLoseGame");

const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");


//=================Fuction One=================//
const eventOne = () => {
    const valueOne = playerInputOne.value;

    massegeOne.classList.add("hidden");
    requireMessageOne.classList.add("hidden");

    if (valueOne === "") {
        requireMessageOne.classList.remove("hidden");
    } else if (valueOne >= 0 && valueOne <= 10) {
        displayOne.classList.add("hidden");
        displayTwo.classList.remove("hidden");
    } else {
        massegeOne.classList.remove("hidden");
    }
};
btnOne.addEventListener("click", eventOne);




//=================Fuction Two=================//
const eventTwo = () => {
    const InputValueOne = playerInputOne.value;
    const InputValueTwo = playerInputTwo.value;

    massegeTwo.classList.add("hidden");
    requireMessageTwo.classList.add("hidden");

    if (InputValueTwo === "") {
        requireMessageTwo.classList.remove("hidden");
    }
    else if (InputValueTwo >= 0 && InputValueTwo <= 10) {
        WinLoseGame.classList.remove("hidden");

        if (InputValueOne === InputValueTwo) {
            WinLoseGame.innerHTML = "It's a tie!";
        }
        else if (InputValueOne > InputValueTwo) {
            WinLoseGame.innerHTML = "Player 1 wins!";
        }
        else {
            WinLoseGame.innerHTML = "Player 2 wins!";
        }
    }
    else {
        massegeTwo.classList.remove("hidden");
    }
    showRequireSMS();
};
btnTwo.addEventListener("click", eventTwo);
