//typeof ...; для определения типа данных

typeof 17; //-> number

const a = 18;
typeof a; //-> number

typeof 17.17; //-> number

typeof '17'; //-> string
typeof "17"; //-> string

typeof false; //-> boolean
typeof true; //-> boolean

typeof null; //-> object - историческая ошибка
typeof undefined; //->undefined

typeof Symbol(); //-> symbol

typeof {name: "john"}; //-> object
typeof [1, 2, 3]; //-> object

typeof function run() {
    return 17;
}; //-> function - исключение