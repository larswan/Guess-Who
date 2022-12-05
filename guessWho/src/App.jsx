import { useEffect, useState } from 'react'
import './App.css'

// Style components from MUI, must run $npm install @mui/material @emotion/react @emotion/styled
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ImageList from '@mui/material/ImageList'
import {pokeKey} from './keys'

// Components and data import
import GameBoard from './GameBoard'
import { filteredCards } from './filteredCards'
import { placeholder24cards } from './placeholder24cards'


//random number generator
function getRndInteger(min, max) {
  let rndmNum = Math.floor(Math.random() * (max - min)) + min;
  return rndmNum
}

// Filters cards to new array of only pokemon
// const allBase1Pokemon = allBase1Cards.filter((x) => { return (x.supertype == 'Pokémon') })
// console.log(allBase1Pokemon)

function App() {
  const [cards, setCards] = useState([])
  const [pokeSeed, setPokeSeed] = useState(1)
  const [gameCards, setGameCards] = useState([])
  
  let i = 0

  function random24cards(){
    let rndmInt = getRndInteger(1,67)
    // switch i to rndmInt and figure out how to check off prevState to avoid duplicates
    let addPoke = filteredCards[i]
    setCards((prev) =>  [...prev, addPoke])
    }
  
  
  useEffect(()=>{
    // do { random24cards() } while (i < 24)
    while(i < 24){
      random24cards()
      i++
    }
    
  },[])
  
  useEffect(()=>{
    let updatedCards = cards.map((x) => ({ ...x, "faceUp": true }))
    setGameCards(updatedCards)
    console.log(gameCards)
  },[cards])


  return (
    <div  className="App">
      <div>
        <a></a>
        <a href="https://reactjs.org" target="_blank">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdRKOBteZ27eUR1APw8FistZBxTIv7xIDC8o6Iq-KaYBMif2z1ciouLd49zS3_u3A47k&usqp=CAU' className="logo" alt="React logo" />
        </a>
      </div>
      <GameBoard cards = {gameCards} setCards={setCards} />
      <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Hello World</Button> 

      </div>
      {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </div>
  )
}

export default App