let username =  prompt('Welkom! Wat is je naam? ');
 
alert(`Hey ${username}!
Zin in een spelletje?
Ik kies een getal uit een reeks van het kleinste t/m het grootste nummer,
en jij mag dit nummer 5x proberen te raden. Succes!
`);

let minNumString = prompt('Voer het kleinste nummer in: ');
let maxNumString = prompt('Voer het grootste nummer in: ');

let min = parseInt(minNumString);
let max = parseInt(maxNumString);

let askNumber = parseInt(prompt(`Kies een nummer van ${min} tot ${max}: `));
  
const randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const randomNumber = randomInt(min, max);
console.log(randomNumber);


for (x=5; x >= 1; x--) {
  
  if (askNumber === randomNumber) {
    alert(`Correct! Gefeliciteerd, je hebt het nummer geraden!
    Het spel is afgelopen. Tot ziens ${username}.`);
    x = 0;
  }
  else if (askNumber != randomNumber && x > 1) {
    y = x - 1;
    let guess = prompt(`Onjuist! Helaas, U heeft nog ${y} pogingen over!
    Probeer het nog eens: `);    
    askNumber = parseInt(guess);
  } else if (askNumber != randomNumber && x === 1) {
    alert(`Helaas, je hebt het niet geraden. Tot ziens ${username}!`);
  }
}






