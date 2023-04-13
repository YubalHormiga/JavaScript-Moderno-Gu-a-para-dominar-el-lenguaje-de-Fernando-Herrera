// 2C = Dos de Treboles
// 2D = Dos de Diamantes
// 2H = Dos de Corazones
// 2S = Dos de Espadas

//* Para crear una nueva baraja
let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0
let puntosComputadora = 0

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir')
const btnDetener = document.querySelector('#btnDetener')
const btnNuevo = document.querySelector('#btnNuevo')
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
const puntosHTML = document.querySelectorAll('small')
// console.log(puntosHTML)
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo)

        }

    }
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo)
        }
    }
    deck = _.shuffle(deck)
    // console.log(deck)

    return deck
}

crearDeck()

// Funcion para solicitar carta

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    const carta = deck.pop()
    // console.log(deck)
    // console.log(carta)
    return carta
}
//Turno de Computadora

const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta()
        puntosComputadora = puntosComputadora + valorCarta(carta)
        puntosHTML[1].innerText = puntosComputadora
        // <!-- <img class="carta" src="assets/cartas/10C.png" alt="carta" /> -->
        const imgCarta = document.createElement('img')
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        divCartasComputadora.appendChild(imgCarta)

        if (puntosMinimos > 21) {
            break
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('nadie gana')
        } else if (puntosMinimos > 21) {
            alert('pc gana')
        } else if (puntosComputadora > 21) {
            alert('jugador gana')
        } else {
            alert('computadora gana')
        }

    }, 100);
}

// pedirCarta()

const valorCarta = (carta) => {
    const valor = carta.slice(0, -1)

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : Number(valor)

    // let puntos = 0

    // if (isNaN(valor)) {
    //     puntos = (valor === 'A'? 11 : 10 )
    // } else {
    //     puntos = Number( valor )
    // }
    // console.log(puntos)
}


//Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta()
    puntosJugador = puntosJugador + valorCarta(carta)
    puntosHTML[0].innerText = puntosJugador
    // <!-- <img class="carta" src="assets/cartas/10C.png" alt="carta" /> -->
    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')
    divCartasJugador.appendChild(imgCarta)

    if (puntosJugador > 21) {
        btnPedir.disabled = true
        btnDetener.disabled = true

        turnoComputadora(puntosJugador)

    } else if (puntosJugador === 21) {
        btnPedir.disabled = true
        btnDetener.disabled = true

        turnoComputadora(puntosJugador)

    }

})

btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true
    btnPedir.disabled = true
    turnoComputadora(puntosJugador)
})

btnNuevo.addEventListener('click', () => {
    deck = []
    deck = crearDeck()
    puntosJugador = 0
    puntosComputadora = 0
    puntosHTML[0].innerText = 0
    puntosHTML[1].innerText = 0
    divCartasJugador.innerHTML = ''
    divCartasComputadora.innerHTML = ''
    btnDetener.disabled = false
    btnPedir.disabled = false
})