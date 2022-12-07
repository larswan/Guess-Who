import { useEffect } from 'react'
import PickCard from './PickCard'
import { useNavigate } from "react-router-dom";

// Components and data import
import { filteredCards } from './filteredCards'

//random number generator
function getRndInteger(min, max) {
    let rndmNum = Math.floor(Math.random() * (max - min)) + min;
    return rndmNum
}

function StartScreen({cards, setCards, playerTurn, setPlayerTurn, setP1Card, setP2Card}) {
    
    const navigate = useNavigate()
    
    //default to landing page if random cards not generated
    useEffect(() => {
        if (cards.length < 24) {
            navigate("./")
        }
    }, [])

    useEffect(() => {
        let i = 0
        let tempCards = []
        
        while (i < 24) {
            let rndmInt = getRndInteger(0, 69)
            let addPoke = filteredCards[rndmInt]
            
            if (!tempCards.includes(addPoke)) {
                tempCards.push({ "name": addPoke.name, "image": addPoke.images.small, "largeImage": addPoke.images.large, "id": addPoke.nationalPokedexNumbers })
                i++
            }
        }
        
        //let updatedCards = tempCards.map((addPoke) => ({"name":addPoke.name, "image": addPoke.images.small, "largeImage": addPoke.images.large, "id": addPoke.nationalPokedexNumbers}))
        setCards(tempCards)
        
        console.log(tempCards)
    }, [])
    
    return (
        <div className="App">
            <div>
                <h1>Player {playerTurn} choose your card:</h1> 
                {/* <a></a>
                <a >
                    <img src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="React logo" />
                </a> */}
            </div>
            <div className="CardContainer">
                {
                    cards.map((card) => {
                        return (
                            <PickCard card={card} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setP1Card={setP1Card} setP2Card={setP2Card} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StartScreen