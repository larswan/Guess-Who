import CardContainer from './CardContainer'

const GameBoard = ({ cards, setGameCards, guessMode, setGuessMode, setGuessedCard }) => {
    return(
    <div >
            <CardContainer cards={cards} setGameCards={setGameCards} guessMode={guessMode} setGuessMode={setGuessMode} setGuessedCard={setGuessedCard} />
    </div>
    )
}

export default GameBoard