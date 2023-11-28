// Логические операторы

// ИЛИ (OR), работа с булевыми данными
true || false; //-> true
false || true; //-> true
true || true; //-> true
false || false; //-> false

false || false || false; //-> false
false || false || false || true; //-> true

// И (AND), работа с булевыми данными
true && true; //-> true
true && false; //-> false
false && true; //-> false
false && false; //-> false

false && true && true && true && true; //-> false
true && true && true; //-> true

/*                  */

// Работа ИЛИ и И с другими типами данных

// ИЛИ (||) находит первое истинное значение
'text' || false; //-> "text"
true || 'text'; //-> true

undefined || null || 0 || '' || null; //-> null - если всё false, возвращает последнее значение
undefined || null || 0 || '' || 0; //-> 0
undefined || null || 0 || '' || undefined; //-> undefined

const customAmount = null;
const defaultAmount = 17;
const amount = customAmount || defaultAmount;
amount; //-> 17

const cAmount = 1;
const amount1 = cAmount || defaultAmount;
cAmount; //-> 1, т.к. первое слева-направо не ложное

// И (&&) находит первое ложное значение
'text' && false; //-> false
true && 'text'; //-> "text" - если не находит ложное значение, то выводит последний операнд
undefined && null && 0 && '' && null; //-> undefined

/*                  */

// Оператор отрицания
!true; //-> false
!false; //-> true
!'text'; //-> false - перевод сначала в булеву строку, потом отрицание
!!'text'; //-> true - двойное отрицание

Boolean('text'); //-> true - явное приведение
!!'text' === Boolean('text'); //-> true


// ! -> && -> || 



