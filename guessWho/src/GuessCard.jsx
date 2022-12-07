import { useNavigate} from "react-router-dom";

const GuessCard = ({ playerTurn, setPlayerTurn, cardToGuess, guessMode, setGuessMode, guessedCard }) => {
    const blueButton = "https://github.com/larswan/Guess-Who/blob/main/guessWho/blue%20guess%20card.png?raw=true"
    const redButton = "https://github.com/larswan/Guess-Who/blob/main/guessWho/red%20guesscard.png?raw=true"

    const navigate = useNavigate()

    const handleClick = () => {
        console.log(guessMode)
        setGuessMode(true)
        
        if(guessedCard==cardToGuess){
            navigate("/WinnerScreen")
            setGuessMode(false)
        }
        else{
            setPlayerTurn(playerTurn === 1 ? 2 : 1)
            setGuessMode(false)
            
        }
    }

    return(
        <div>
            <img className="GuessButton" onClick={()=>{handleClick()}}  src={playerTurn == 1 ? blueButton : redButton } />
        </div>
    )
}

export default GuessCard