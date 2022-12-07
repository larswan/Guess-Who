import { useEffect, useState } from 'react'
import PickCard from './PickCard'
import { useNavigate } from "react-router-dom";
import PokeBallSpinner from './PokeBallSpinner'


// Components and data import
import { filteredCards } from './filteredCards'

//random number generator
function getRndInteger(min, max) {
    let rndmNum = Math.floor(Math.random() * (max - min)) + min;
    return rndmNum
}

function StartScreen({ cardSet, setCardSet, playerTurn, setPlayerTurn, setP1Card, setP2Card}) {
    
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState(false)
    
    //default to landing page if random cards not generated
    useEffect(() => {
        console.log(cardSet)
        if (cardSet==[]) {
            navigate("./")
        }
    }, [])
    
    useEffect(() => {
        let tempCards = []
        let i = 0
        let addedNumbers = []
        
        while (i < 24) {
            let rndmInt = getRndInteger(0, 69)
            let addPoke = filteredCards[rndmInt]
            
            if (!addedNumbers.includes(rndmInt)) {
                tempCards.push({ "name": addPoke.name, "image": addPoke.images.small, "largeImage": addPoke.images.large, "id": addPoke.nationalPokedexNumbers, "faceUp": false })
                addedNumbers.push(rndmInt)
                i++
            }
        }

        setCardSet([tempCards,tempCards])
        // setIsLoaded(true)
    }, [])
    
    return (
        <div className="App">
            <div>
                <h1>Player {(playerTurn + 1)} choose your card:</h1> 
            </div>
            <div className="CardContainer">
                {cardSet.length > 0 ?
                    cardSet[0].map((card) => {
                        return (
                            <PickCard card={card} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setP1Card={setP1Card} setP2Card={setP2Card} />
                        )
                    })
                    : null
                }
            </div>
        </div>
    )
}

export default StartScreen