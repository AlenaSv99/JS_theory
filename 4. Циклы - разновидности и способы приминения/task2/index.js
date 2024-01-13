// Цикл do while

// Cинтаксис:
// do {
       // 'тело цикла'
       // код выполнится хотя бы один раз
//} while (*условие*):

// Предыдущая задача с новым циклом
let n1 = 10;
let sum = 0;
do {
    sum += n1;
    n1 -= 1;
} while (n1 > 0);

console.log('Result: ' + sum); //-> Result: 55

// Задача 2: найти произв. всех нечёт. чисел в промежутке от 10 до 20
let m = 10;
const n = 20;
let result = 1;

do {
    if (m % 2 === 1) {
        result *= m;
    }
    m++;
} while (m  < n);

console.log('Result: ' + result); //-> Result: 692835