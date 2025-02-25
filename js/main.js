// - chiedere all'utente i km che vuole percorrere
const userKM = prompt("Quanti KM vuoi percorrere?")
// - chiedere all'utente l'età del passeggero
const userAge = prompt("Quanti anni hai?")
// - prezzo del biglietto = 0.21€ * km
const ticketPrice = userKM * 0.21

let Discount = 0
// - sconto
//     - se minorenne (età < 18)
if (userAge < 18) {
    //         - sconto 20%
    Discount = (ticketPrice * 20) / 100
    //     - se età over 65 (età > 65)  
} else if (userAge > 65) {
    //         - sconto 40%
    Discount = (ticketPrice * 40) / 100
}
//     - altrimenti prezzo pieno

// - il prezzo deve essere printato in forma umana (massimo 2 decimali)
console.log((ticketPrice - Discount).toFixed(2))