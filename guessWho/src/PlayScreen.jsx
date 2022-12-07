import GameBoard from './GameBoard'
import PlayerCard from './PlayerCard'
import Forms from './Forms'
import GuessCard from './GuessCard'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const PlayScreen = ({ cards, playerTurn, setPlayerTurn, playerCard, setCards, cardToGuess, guessMode, setGuessMode, guessedCard, setGuessedCard }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (cards.length < 24) {
            navigate("/StartScreen")
        }
    }, [])

    return(
        <div>
            <GameBoard cards={cards} setGameCards={setCards} guessMode={guessMode} setGuessedCard={setGuessedCard} /><br/>
            <div className = "lowerPlayScreen" >
                <PlayerCard card={playerCard} />
                <Forms playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setCards={setCards} />
                <GuessCard playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} cardToGuess={cardToGuess} guessMode={guessMode} setGuessMode={setGuessMode} guessedCard={guessedCard} />
            </div>
        </div>   
    )
}

export default PlayScreen