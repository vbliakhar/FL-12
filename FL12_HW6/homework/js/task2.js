let a = +prompt('Length of the first side');
let b = +prompt('Length of the second side');
let c = +prompt('Length of the third side ');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
   console.log('input values should be ONLY numbers');
} if (a <= 0 || b <= 0 || c <= 0) {
    console.log('A triangle must have 3 sides with a positive definite length');
} if (a < b + c && b < a + c && c < a + b) {
    console.log('Triangle exist.');
    if (a === b && b === c && c === a) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else if (a !== b && b !== c && c !== a) {
        console.log('Scalene triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}
