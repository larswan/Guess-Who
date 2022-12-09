import Card from './Card'

function CardContainer({ cardSet, setCardSet, guessMode, setGuessMode, setGuessedCard, playerTurn }) {
    
    return(
        <div className="CardContainer" >
            {
                cardSet[playerTurn].map((card, i)=>{
                    return (
                        <Card card={card} cardSet={cardSet} setCardSet={setCardSet} playerTurn={playerTurn} i={i} guessMode={guessMode} setGuessMode={setGuessMode} setGuessedCard={setGuessedCard} />
                    )
                })
            }
        </div>
    )
}

export default CardContainer