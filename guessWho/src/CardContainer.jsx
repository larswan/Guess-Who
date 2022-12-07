import Card from './Card'
import { useEffect } from 'react'


function CardContainer({ cards, setGameCards, guessMode, setGuessMode, setGuessedCard }) {
    
    return(
        <div className="CardContainer" >
            {
                cards.map((card, i)=>{
                    return (
                        <Card card={card} cards={cards} setGameCards={setGameCards} i={i} guessMode={guessMode} setGuessMode={setGuessMode} setGuessedCard={setGuessedCard} />
                    )
                })
            }
        </div>
    )
}

export default CardContainer