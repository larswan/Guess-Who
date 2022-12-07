import CardContainer from './CardContainer'
import PlayerCard from './PlayerCard'
import Forms from './Forms'
import GuessCard from './GuessCard'
import { useNavigate } from "react-router-dom";
import { soundClip } from './soundClip';
import {useEffect} from 'react'


const PlayScreen = ({ cardSet, setCardSet, playerTurn, setPlayerTurn, secretCard, cardToGuess, guessMode, setGuessMode, guessedCard, setGuessedCard }) => {
    const navigate = useNavigate()

    useEffect(() => {
        // soundClip()
        console.log(secretCard)
    },[])
       
    if (cardSet.length < 1) {
        navigate("/StartScreen")
        return <div></div>
    }
    else{
    return(
        <div>
            <CardContainer cardSet={cardSet} setCardSet={setCardSet} guessMode={guessMode} playerTurn={playerTurn} setGuessMode={setGuessMode} setGuessedCard={setGuessedCard} /><br/>
            <div className = "lowerPlayScreen" >
                <PlayerCard secretCard={secretCard[playerTurn]} />
                <Forms playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setCardSet={setCardSet} />
                <GuessCard playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} cardToGuess={cardToGuess} guessMode={guessMode} setGuessMode={setGuessMode} guessedCard={guessedCard} />
            </div>
        </div>   
    )
}
}

export default PlayScreen