let nota = 55

let a = nota >= 90;
let b = nota >= 80 && nota <= 89;
let c = nota >= 70 && nota <= 79;
let d = nota >= 60 && nota <= 69;
//let f = nota < 50 && nota >= 59;

if (a) {
    console.log('A')
} else if (b) {
    console.log('B')
} else if (c) {
    console.log('C')
} else if (d) {
    console.log ('D')
} else {
    console.log('F')
}
