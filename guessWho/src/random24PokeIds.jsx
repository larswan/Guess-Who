const [count, setCount] = useState()
const [allCards, setAllCards] = useState([])

//const pokeSeed = getRndInteger(1, 151)
let randomId;
let randomIdString

// seed and count generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// turn numbers into strings
let randmPoke = count.toString()

function digitAdder(str) {
    while (str.length < 3) {
        str = "0" + str
    }
    return str;
}
randmPokeFullString = digitAdder(secondPoke)

console.log(randmPokeFullString)