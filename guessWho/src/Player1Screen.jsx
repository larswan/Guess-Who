const Player1Screen = () => {
    return(
        <div>
            <GameBoard cards={gameCards} setGameCards={setGameCards} />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Hello World</Button> 
        </div>
        
    )
}

export default Player1Screen