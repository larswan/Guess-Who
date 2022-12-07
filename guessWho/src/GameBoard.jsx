import CardContainer from './CardContainer'

const GameBoard = ({ cards, setGameCards, guessMode, setGuessedCard }) => {
    return(
    <div >
            <CardContainer cards={cards} setGameCards={setGameCards} guessMode={guessMode} setGuessedCard={setGuessedCard} />
    </div>
    )
}

export default GameBoard