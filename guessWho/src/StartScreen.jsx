import './App.css'
import { useEffect, useState } from 'react'
import GameBoard from './GameBoard'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// Components and data import
import { filteredCards } from './filteredCards'

//random number generator
function getRndInteger(min, max) {
    let rndmNum = Math.floor(Math.random() * (max - min)) + min;
    return rndmNum
}

function StartScreen({cards, setCards}) {
    const [gameCards, setGameCards] = useState([])

    
    useEffect(() => {
        let i = 0
        let tempCards = []

        while (i < 24) {
            let rndmInt = getRndInteger(0, 69)
            let addPoke = filteredCards[rndmInt]

            if (!tempCards.includes(addPoke)) {
                tempCards.push(addPoke)
                i++
            }
        }
        
        let updatedCards = tempCards.map((x) => ({ ...x, "faceUp": true }))
        setCards(updatedCards)

        const postRequest = () => {
                fetch("http://localhost:3000/CardSets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedCards),
            }
            
            )


        }
        postRequest()
       

    }, [])
    
    return (
        <div className="App">
            <div>
                <h1>Start Screen</h1> 
                <a></a>
                <a >
                    <img src='https://github.com/larswan/Guess-Who/blob/main/guessWho/pokeball%20icon.png?raw=true' className="logo" alt="React logo" />
                </a>
            </div>
            <div>
                <GameBoard cards={cards} setGameCards={setCards} />
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained">Hello World</Button> */}
            </div>
        </div>
    )
}

export default StartScreen