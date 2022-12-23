const faceDownImage = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_1024,h_1420,strp/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA"

function Card({card, cardSet, setCardSet, playerTurn, i, guessMode, setGuessMode, setGuessedCard}){
    
    const clickHandler = (card) => {

        if(guessMode){
            setGuessedCard(card)
            setGuessMode(false)
        }
        else{
            // create a duplicate card with a revered faceUp value
            let newCard = {...card, "faceUp": !card.faceUp}
            
            // create a new card set
            let newCards = [...cardSet[playerTurn]]

            // sub in the new card in a duplicate array
            newCards[i] = newCard
            setCardSet((prev)=>{return [...prev, prev[playerTurn]=newCards]})
        }
    }  

    return(
        <div className="CardDiv" onClick={() => { clickHandler(card) }} >
            {!card.faceUp? 
            <img className="Card" src={card.image} />
        : null}
            <div className="peopleNames"><b>{card.name}</b></div>
            </div>
            )
}

export default Card

// attempted state dependent card change from within cardDiv style = {{ backgroundColor: "black" }}