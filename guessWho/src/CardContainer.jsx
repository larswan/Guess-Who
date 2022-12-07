import Card from './Card'
import { useEffect } from 'react'


function CardContainer({ cardSet, setCardSet, guessMode, setGuessMode, setGuessedCard, playerTurn }) {
    console.log(cardSet[playerTurn])
    
    return(
        <div className="CardContainer" >
            {
                cardSet[0].map((card, i)=>{
                    return (
                        <Card card={card} cardSet={cardSet} setCardSet={setCardSet} i={i} guessMode={guessMode} setGuessMode={setGuessMode} setGuessedCard={setGuessedCard} />
                    )
                })
            }
        </div>
    )
}

export default CardContainer