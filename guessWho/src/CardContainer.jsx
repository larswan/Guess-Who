import Card from './Card'
import { useEffect } from 'react'


function CardContainer({ cards, setGameCards, guessMode, setGuessedCard }) {
    
    return(
        <div className="CardContainer" >
            {
                cards.map((card, i)=>{
                    return (
                        <Card card={card} cards={cards} setGameCards={setGameCards} i={i} guessMode={guessMode} setGuessedCard={setGuessedCard} />
                    )
                })
            }
        </div>
    )
}

export default CardContainer