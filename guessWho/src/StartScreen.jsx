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

function StartScreen({ cardSet, setCardSet, playerTurn, setPlayerTurn, setP1Card, setP2Card}) {
    
    const navigate = useNavigate()
    
    //default to landing page if random cards not generated
    useEffect(() => {
        if (cardSet[0].length < 24) {
            navigate("./")
        }
    }, [])

    useEffect(() => {
        let i = 0
        let tempCards = []
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

        setCardSet([tempCards, tempCards])
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
                    cardSet.map((card) => {
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