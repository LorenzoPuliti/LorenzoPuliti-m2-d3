//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let a = 8
let x = 5 
 if (a > x) {
  console.log(a)
 }
 else { console.log('errore')}




/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/


if (x<5) {
  console.log('Tiny')
}
else if (x<10) {
  console.log('Small')}

if (x<15) {
  console.log('Medium')
}

if (x<20) {
  console.log('Large')
}

if (x>=20) {
  console.log('errore')
}
else {
  console.log('Huge')
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let y = 0; y <= 10; y++) {
 if (y === 3) {
  continue
 }
 if (y === 8) {
  continue
 }
  console.log(y)
}


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let z = 0; z <= 15; z++) {
if (z % 2 === 0) {console.log('pari')}
else (console.log('dispari'))

  console.log(z)
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let c = 3
let d = 6


if (c === 8 || d === 8 || c + d === 8 || c - d === 8) {
  console.log('bingo')
}
else {
  console.log('8 non esiste')
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCard = 49.99
let spesaaggiuntiva = 50.01
let spedizione = 10

if (totalShoppingCard < 50) {
  console.log(totalShoppingCard + spedizione)
}
else {
  console.log(totalShoppingCard)
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let sconto = 0.2

if ((totalShoppingCard * sconto) < 50) {
  console.log(totalShoppingCard * sconto + spedizione)
}
else {
  console.log(totalShoppingCard * sconto)
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let male = true
let isMale = true
let gender = isMale ? male : female

console.log(gender)




/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let m = 1; m <= 100; m++ ) {{
 if ((m % 3) === 0 ) if ((m % 5) === 0)
  console.log('FizzBuzz')
  
}
if ((m % 3) === 0) { 
  console.log('Fizz')
}
if ((m % 5) === 0) {
  console.log('Buzz')

}
console.log(m)
}
