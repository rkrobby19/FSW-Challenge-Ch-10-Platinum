export const generateComChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    let comChoice = ""

    if (randomNumber === 0) {
        comChoice = "gunting"
    } else if (randomNumber === 1) {
        comChoice = "kertas"
    } else {
        comChoice = "batu"
    }

    return(comChoice)
};

export const compareChoice = (comChoice, playerChoice) => {
    let result = ""

    if (comChoice === playerChoice) {
        result = "DRAW"
    } else if (
        comChoice === "gunting" &&
        playerChoice === "batu"
    ) {
        result = "PLAYER WIN"
    } else if (
        comChoice === "gunting" &&
        playerChoice === "kertas"
    ) {
        result = "COM WIN"
    } else if (
        comChoice === "batu" &&
        playerChoice === "kertas"
    ) {
        result = "PLAYER WIN"
    } else if (
        comChoice === "batu" &&
        playerChoice === "gunting"
    ) {
        result = "COM WIN"
    } else if (
        comChoice === "kertas" &&
        playerChoice === "gunting"
    ) {
        result = "PLAYER WIN"
    } else if (
        comChoice === "kertas" &&
        playerChoice === "batu"
    ) {
        result = "COM WIN"
    }

    return(result)
};