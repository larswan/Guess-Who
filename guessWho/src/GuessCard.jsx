import { useNavigate} from "react-router-dom";
import { useEffect } from "react"

const GuessCard = ({ playerTurn, setPlayerTurn, cardToGuess, guessMode, setGuessMode, guessedCard }) => {
    const redButton = "https://github.com/larswan/Guess-Who/blob/main/guessWho/blue%20guess%20card.png?raw=true"
    const blueButton = "https://github.com/larswan/Guess-Who/blob/main/guessWho/red%20guesscard.png?raw=true"

    const navigate = useNavigate()

    const handleClick = () => {

        // USE TO TEST PLAYER TURN TYPE STUFF
        // playerTurn==1?setPlayerTurn(0) : setPlayerTurn(1)
        // return
        
        setGuessMode(true)
        console.log(guessMode)
    }

    useEffect(() => {
        console.log(guessedCard.name + cardToGuess.name)
        if (guessedCard.name == cardToGuess.name) {
            navigate("/WinnerScreen")
        }
        else {
            setPlayerTurn(playerTurn === 0 ? 1 : 0)
        }
    }, [guessedCard])

    return(
        <div>
            <img className="GuessButton" onClick={()=>{handleClick()}}  src={playerTurn == 1 ? blueButton : redButton } />
        </div>
    )
}

export default GuessCard