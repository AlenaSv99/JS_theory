// Условные операторы

// IF - для проверки одного условия

if (true) console.log("I'n in"); // не очень хорошая запись
if (true) {
    console.log("I'n in");
} // более хороший вариант

if (false) {
    console.log("I'n in");
    alert();
}

if ('text') {
    console.log("Yes");
} // сначала идёт преобразование в булево значение, а потом выполняется код


/*                  */ 

// IF | ELSE - для проверки двух условий

if (null) {
    console.log('Yes');
} else {
    console.log('Else');
} // первый блок кода не выполнился, зато выполнился второй

/*                  */ 

// IF | ELSE IF | ELSE - для проверки нескольких условий 

/*                  */ 

// Задача

let age = 1;

if (age < 16) {
    console.log('Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready');
} else {
    console.log('Else');
} //-> Too young


age = 17; //-> 17

if (age < 16) {
    console.log('Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready');
} else {
    console.log('Else');
 } //-> Almost ready


age = 67; //-> 67

if (age < 16) {
    console.log('Too young');
} else if (age >= 16 && age < 18) {
    console.log('Almost ready');
} else if (age >= 18 && age < 65) {
    console.log('Ready');
} else {
    console.log('Else');
} //-> Else

/*                  */ 

// Тернарный оператор (?)

// Синтаксис: 
// (const result = условие ? значение1 : значение2;) 
// значение1 выводится, если условие выполняется, 
// значение2 - если условие не выполняется

let amount = 1;

const result = amount > 17 ? 'full' : 'empty'; 
result; //-> 'empty'

/*                  */ 

// Приоритет операторов
// унарные -> бинарные арифметические -> операторы сравнения -> присваивание
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence
