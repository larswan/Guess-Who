import { useNavigate} from "react-router-dom";
import { useEffect } from "react"

const GuessCard = ({ setp1r, setp2r, formStep, setFormStep, setOldP1Q, setOldP2Q, playerTurn, setPlayerTurn, cardToGuess, guessMode, setGuessMode, guessedCard }) => {
    const blueButton = "https://github.com/larswan/Guess-Who/blob/main/blue%20guess%20card.PNG?raw=true"
    const redButton = "https://github.com/larswan/Guess-Who/blob/main/guessWho/red%20guesscard.png?raw=true"

    const navigate = useNavigate()

    const handleClick = () => {
        // USE TO TEST PLAYER TURN TYPE STUFF
        // playerTurn==1?setPlayerTurn(0) : setPlayerTurn(1)
        // return
        
        setGuessMode(true)
        console.log(guessMode)
    }

    useEffect(() => {
        if (guessedCard.name == cardToGuess.name) {
            navigate("/WinnerScreen")
        }
        else if (playerTurn==0){
            setOldP1Q('')
            setp2r('')
            setFormStep('player2Response')
            setPlayerTurn(playerTurn === 0 ? 1 : 0)
            return
        }
        else if (playerTurn==1){
            setOldP2Q('')
            setp1r('')
            setFormStep('player1Response')
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