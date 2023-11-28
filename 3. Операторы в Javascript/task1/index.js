//Операции в JS и неявное приведение типов

//унарный плюс приводит операнд к числу 
+17; //-> 17
+true; //-> 1
+false; //-> 0
+''; //-> 0 (неявное приведение типов)
+'17'; //-> 17 (неявное приведение типов)
+'text'; //-> NaN (неявное приведение типов)

//бинарный плюс складывает строки или прибавляет числа
10/2; //-> 5
10*2; //-> 20
'some'+'text'; //-> 'sometext'
10 + '5' //-> '105' (неявное приведение типов)
1 + 3 + '6'; //-> '46' (неявное приведение типов)
'4' + '6'; //-> '46'
17 + ''; //-> '17' (неявное приведение типов)

17+true; //-> 18
17+false; //-> 17

//математические операторы приводят операнды к числам
'24' / 4; //-> 6 (неявное приведение типов)
18 * '3'; //-> 54 (неявное приведение типов)
'9' - '3'; //-> 6 (неявное приведение типов)

'seven' / 1; //-> NaN (неявное приведение типов)
4 * 'four'; //-> NaN (неявное приведение типов)

17 / 0; //-> infinity
typeof Infinity; //-> number
typeof -Infinity; //-> number

const a = 17;
const b = 19;
const c = -a; //-> -17
a + b; //-> 36
-a; //-> -17

-'3'; //-> -3
-'f' //-> NaN

//математические операции с undefined возвращают NaN
undefined + 3; //-> NaN
5 - undefined; //-> NaN
undefined * 1; //-> NaN
undefined / 3; //-> NaN
10 / undefined; //-> NaN

//математические операции с null приводят его к нулю и выполняют операцию
null + 8; //-> 8
7 - null; //-> 7
10 * null; //-> 0
5 / null; //-> infinity

//конкатенация с null и undefined
'text' + null; //-> 'textnull'
'text' + undefined; //-> 'textundefined'
undefined + '5'; //-> 'undefined5'
'3' + undefined + '5'; //-> '3undefined5'
'2'+ null; //-> '2null'

// унарный инкремент (++) увеличивает значение на 1
let num = 15;
++num; //префиксная форма записи сразу возвращает новое значение -> 16
num; //-> 16

num++; //постфиксная форма записи возвращает сначала старое значение -> 16
num; //-> 17

let num1 = 1;
const y = num1++;
y; //-> 1
num1; //-> 2

// унарный дикремент (--) уменьшает значение на 1
num1--; //возвращает старое значение -> 2
num1; //-> 1
--num; //-> 0