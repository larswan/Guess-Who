import Card from './Card'
import { useEffect } from 'react'


function CardContainer({cards, setGameCards}) {
    console.log(cards.length)
    
    return(
        <div className="CardContainer" >
            {
                cards.map((card, i)=>{
                    return (
                        <Card card={card} cards={cards} setGameCards={setGameCards} i={i}/>
                    )
                })
            }
        </div>
    )
}

export default CardContainer