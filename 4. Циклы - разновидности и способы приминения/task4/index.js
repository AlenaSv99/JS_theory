// Бесконечный циклы и их польза

// Программа считает сумму чисел до тех пор, пока пользователь не нажмёт 'Cancel' в выпадающем окне
let result = 0;

while (true) {
    const userInput = prompt('Your number');
    if (!userInput) {
        break
    }
    result += Number(userInput);
}

console.log('Result: ' + result);

// Задача на произв. нечёт. чисел в промежутке от 10 до 20 включительно
const n = 20;
let result1 = 1;

for (let m = 10; m <= n; m++) {
    if (m % 2 === 0) continue;  // если остаток от дел. на 2 = 0, то переход на след. итерацию
    result *= m;
}

console.log('Result: ' + result1); //-> Result: 692835