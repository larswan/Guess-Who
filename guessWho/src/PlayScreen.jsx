import CardContainer from './CardContainer'
import PlayerCard from './PlayerCard'
import Forms from './Forms'
import { useNavigate } from "react-router-dom";
import {useEffect}  from 'react'
import { soundClip } from './soundClip';

const PlayScreen = ({ cardSet, setCardSet, playerTurn, setPlayerTurn, secretCard, cardToGuess, guessMode, setGuessMode, guessedCard, setGuessedCard }) => {
    const navigate = useNavigate()

    useEffect(() => {

        // Whos That Pokemon Sound Clip
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
                <div className="PlayerCard">
                    <PlayerCard secretCard={secretCard[playerTurn]} />
                </div>
                <div className="FormContainer">
                    <Forms playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setCardSet={setCardSet} cardToGuess={cardToGuess} guessMode={guessMode} setGuessMode={setGuessMode} guessedCard={guessedCard} />
                </div>
                
            </div>
        </div>   
    )
}
}

export default PlayScreen