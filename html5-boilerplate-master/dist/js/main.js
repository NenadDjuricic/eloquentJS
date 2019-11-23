/*
let taraba = "#";
for(let i=0; i < 7; i++){
    console.log(taraba);
    taraba = taraba + '#';
}

for(let i=1; i<=100; i++){
    if( i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz ' + i);
    }
    else if(i%3 == 0){
        console.log("Fizz " + i);
    }
    else if( i%5 == 0){
        console.log("Buzz " + i);
    }
    else{
        console.log(i);
    }
}

let grid = 8;
let taraba = '';

for(let i=0; i<=grid; i++){
    for(let k=0; k<=grid; k++){
        if((i+k)% 2 == 0){
        taraba += ' ';
        }
        else{
        taraba += '#';
        }
    }
    taraba += '\n';
}

console.log(taraba);

let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');

function greet(who) {
    console.log("Hello " + who);
    }
    greet("Harry");
    console.log("Bye");


function multiplier(factor) {
    return function ser (ser=5) {
          return ser * factor;
    }
    }
    let twice = multiplier(2);
    let threes = multiplier(3);
    console.log(twice());
    console.log(threes(9));
    
        function power(base, exponent) {
            if (exponent == 0) {
            return 1;
            } else {
            return base * power(base, exponent - 1);
            }
            }
            console.log(power(2, 3));
            
            function zeroPad(number, width) {
                let string = String(number);
                while (string.length < width) {
                string = "0" + string;
                }
                return string;
                }
                function printFarmInventory(cows, chickens, pigs) {
                console.log(`${zeroPad(cows, 3)} Cows`);
                console.log(`${zeroPad(chickens, 3)} Chickens`);
                console.log(`${zeroPad(pigs, 3)} Pigs`);
                }
                printFarmInventory(7, 16, 3);
               
function minimum(a,b){
    if(a<b){
        console.log(a);
    }
    else{
        console.log(b);
    }
}                
minimum(4,5);
minimum(10,5);

console.log(Math.min(4,210));

function positionOfChar(string,char){
    var counter = 0;
    for(let i=0; i < string.length; i++){
        if(string.charAt(i) === char){
            console.log('Pronasli');
            counter += 1;
        }
    }
    console.log("Pronasli smo toliko sloba B: " +counter);
}
positionOfChar("BebaB", 'B');
positionOfChar('Aleksandra', 'a');
*/
let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
    }
addEntry('red','redss');
addEntry('redit','bluees');
console.table(journal);