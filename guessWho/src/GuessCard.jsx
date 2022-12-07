const GuessCard = ({playerTurn, setPlayerTurn}) => {
    const blueButton = "https://github.com/larswan/Guess-Who/blob/main/guessWho/blue%20guess%20card.png?raw=true"
    const redButton = "https://github.com/larswan/Guess-Who/blob/main/guessWho/red%20guesscard.png?raw=true"


    return(
        <div>
            <img className="GuessButton" src={playerTurn == 1 ? blueButton : redButton } />
        </div>
    )
}

export default GuessCard