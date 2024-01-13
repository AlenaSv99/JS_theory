// Цикл while

// Cинтаксис:
// while (*условие*) {
    // 'тело цикла'
    // код для каждой итерации
//}

while (false) {
    console.log('text');
} //-> undefined

while (true) {
    console.log('text');
} //-> 'text'*n (n - количество раз, которое выведется слово 'text')

let n = 1;
while (n <= 10) {
    console.log(n);
    n++;
} //-> все числа 1-10 включительно

let n1 = 10;
let sum = 0;
while (n1 > 0) {
    sum += n1;
    n1 -= 1;
} 

console.log('Result: ' + sum); //-> Result: 55