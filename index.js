let nota = 101

let a = nota >= 90 && nota <= 100;
let b = nota >= 80 && nota <= 89;
let c = nota >= 70 && nota <= 79;
let d = nota >= 60 && nota <= 69;
let f = nota >= 0 && nota <= 59;

if (a) {
    console.log('A')
} else if (b) {
    console.log('B')
} else if (c) {
    console.log('C')
} else if (d) {
    console.log ('D')
} else if (f) {
    console.log('F')
} else {
    console.log('Nota Invalida!')
}
