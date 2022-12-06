function PickCard({ card, playerTurn, setPlayerTurn }) {
    
    const clickHandler = (card) => {
        if (playerTurn === 1){
            //post card to player1 card

            setPlayerTurn(2)
        }
        else {
            // Post card to player2 card
            // Route to player1screen

            setPlayerTurn(1)
        }
        // ADD POST REQUEST to Add as player 1 or 2 card 
    }

    return (
        <div>
            <img onClick={() => { clickHandler(card) }} className="Card" src={card.images.large} key={card.nationalPokedexNumbers}/>
        </div>
    )
}

export default PickCard