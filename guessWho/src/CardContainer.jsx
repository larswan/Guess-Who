import Card from './Card'


function CardContainer({cards, setGameCards}) {
console.log(cards)

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