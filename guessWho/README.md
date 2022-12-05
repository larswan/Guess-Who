# Guess Who

## Notes

**Pokemon TCG API**
<https://docs.pokemontcg.io/>

**Search cards documentation**
<https://docs.pokemontcg.io/api-reference/cards/search-cards/>

nationalPokedexNumbers:[1 TO 151]

## Working fetch request

**Image URLS**
https://images.pokemontcg.io/xy7/10.png
https://images.pokemontcg.io/xy7/10_hires.png

**Working Fetch Request**
```
 // TCG API CALL
  // useEffect(() => {
  //   const request = async () => {
  //     let req = await fetch(`https://api.pokemontcg.io/v1/cards/`, {
  //       headers: {
  //         'x-api-key': `${pokeKey}`,
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //     }
  //     )
  //     let res = await req.json()
  //     .catch(error => console.log('Error while fetching:', error))
  //     console.log(res)
  //     setCards(cards)
  //   }
  //   request()
  // }, []) 
  ```