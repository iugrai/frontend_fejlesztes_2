// letrejozzuk a szám változót és értéket is adunk neki
// változó létrehozása: deklarálás
// érték adás: value asignment
let szam = 9;


// value assignment 
// bal oldalon levő változóba bele töltődik a jobb oldalon levő érték

szam = 20;

// csak deklarálás

let myNumber;


// deklarálni három kulcsszóval lehet:
var a;
// nem használjuk
let b;
//  let-et akkor használjuk a később a változó értéket módosítani akarjuk
const c = 10;
// constans: akkor használjuk ha nem akarjuk módosítani az értéket a változónak
// szám nincs körülötte sposztróf/idézőjel
a = 10;
const pi = 3.14;

// string típusú változó: szöveg
let szoveg = 'hello';

console.log(szoveg.toUpperCase());

// tömb: olyan típus ami több másik típust tud tárolni
const myArray = [3, 'hello', a, ['a', 'b']];

console.log(myArray);

// a tömböt nullátol indexeljük:
console.log(myArray[0]);

// a 4 elelmű utolsó eleme a 3-adik eleme, 4 -edik elem nem létezik
console.log(myArray[4]);

// logikai érték (boolean), true vagy false lehet az értéke
let kapcsolo = true;

// javascript: Dynamically typed programming language

console.log(typeof (kapcsolo));

function sayHello() {
  console.log('hello!');
}

function addTwoNumbers(a, b) {
  const sum = a + b;
  console.log(sum);
}

addTwoNumbers(5, 9);

sayHello();


function addThreeNumbers(a, b, c) {
  const sum = a + b + c;
  // return sum;
}

const result = addThreeNumbers(1, 2, 3);
console.log(result);

console.log(addThreeNumbers(1, 1, 1));

result;

// elágazás: vezérlési szerkezet
if (kapcsolo === true) {
  console.log('a kapcsolo be van kapcsolva');
}

if (addThreeNumbers(1, 1, 1) === 3) {
  console.log('az addThreeNumbers jól működik');
} else {
  console.log('az adThreeNumbers nem jól működik');
}

let n = 9;
n !== 9 && n !== 3; //false
n !== 9 || n !== 3; //true

// ciklus: vezérlési szerkezet
// 0-tól   10-ig egyesével

for (let i = 0; i <= 10; i++) {
  console.log(i + 'hello');
}

n++; //n =n+1;
console.log(n);

for (let i = 10; i >= 0; i--) {
  console.log(i + 'hello');
}

// addig fut a cilus amíg az n>= 0
while (n >= 0) {
  console.log('ez egy while ciklus');
  // csökentjük az n változó értékét 1-el (n=n-1)
  n--;
}

const szamok = [2, 3, 4, 5];

console.log('a tömb hossza:' + szamok.length);

// az i változó csak a for cikluson belül létezik
// block scope
for (let i = 0; i < szamok.length; i++) {
  if (szamok[i] === 5)
    console.log('a tömb eleme: ' + szamok[i]);
}

// consol.log(i); // undefined
// function scope:
function myFunc() {
  // lokális változó a myNum: csak a függvényen belül létezik, a függvényen kívűl nem működik
  const myNum = 10;
}
// not defned!!
// console.log(myNum);


console.log('az n változó típusa:' + typeof (n));

let eredmeny = parseInt('a');
// NaN: not a number
console.log(eredmeny);

console.log('az eredmeny tipusa:' + typeof (eredmeny));

console.log(isNaN(eredmeny));

// mindig 3 egyenlőségjellel vizsgáljuk az egyenlőséget
// mert a 2 db egyenlőségjel nem vizsgál típust

// 0==0// true;
// 0=='0'// true!!!

0 === '0'; //false
0 === ''; // true!!
0 == '\n'// true!!
'' == '\n'// false (mekkora hülyesség)

console.log('ez egy uj sor:\n uj sorba kerul');