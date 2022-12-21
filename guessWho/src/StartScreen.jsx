import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

// Components and data import
import PickCard from './PickCard'
import { filteredCards } from './filteredCards'
import { peopleCards } from './peopleCards'

//random number generator
function getRndInteger(min, max) {
    let rndmNum = Math.floor(Math.random() * (max - min)) + min;
    return rndmNum
}

function StartScreen({ cardSet, setCardSet, playerTurn, setPlayerTurn, setSecretCard}) {
    
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState(false)
    
    // default to landing page if random cards not generated
    useEffect(() => {
        setCardSet(peopleCards)
         
        if (cardSet==[]) {
            navigate("http://www.google.com")
        }
        else{
            setPlayerTurn(0)
        }
        console.log(cardSet)
    }, [])
     
    // generate random 24 cards
    // useEffect(() => {
    //     let tempCards = []
    //     let i = 0
    //     let addedNumbers = []
        
    //     while (i < 24) {
    //         let rndmInt = getRndInteger(1, 69)
    //         let addPoke = filteredCards[rndmInt]
            
    //         // Beedrill doesn't have a small image so forget about it
    //         if (!addedNumbers.includes(rndmInt) && rndmInt != 16 && rndmInt != 25) {
    //             tempCards.push({ "name": addPoke.name, "image": addPoke.images.small, "largeImage": addPoke.images.large, "id": addPoke.nationalPokedexNumbers, "faceUp": false })
    //             addedNumbers.push(rndmInt)
    //             i++
    //         }
    //     }

    //     setCardSet([tempCards,tempCards])
    // }, [])
    
    return (
        <div className="App">
            <div className="CardContainer">
                {cardSet.length > 1 ?
                    cardSet.map((card) => {
                        return (
                            <PickCard card={card} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setSecretCard={setSecretCard}/>
                        )
                    })
                    : null
                }
            </div>
            <div>
                <h1>Player {(playerTurn + 1)} choose your card</h1> 
            </div>
        </div>
    )
}

export default StartScreen