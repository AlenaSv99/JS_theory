// Приоритет операций
// * и / выше, чем + и -

//Явное приведение типов (преимущество)
String(17); //-> '17'
String('false'); //-> 'false'
String('null'); //-> 'null'
String(17.5); //-> '17.5'

/*                  */

Number('17'); //-> 17
Number(true); //-> 1
Number(false); //-> 0
Number(null); //-> 0
Number(undefined); //-> NaN
Number('                 17  '); //-> 17
Number('         17C  '); //-> NaN
Number('      '); //-> 0
Number(''); //-> 0


Number('true');      //-> NaN
Number('false');     //-> NaN
Number('NaN');       //-> NaN
Number('null');      //-> NaN
Number('undefined'); //-> NaN

/*                  */

Boolean(null);      //-> false
Boolean(undefined); //-> false
Boolean(0);         //-> false
Boolean(-0);        //-> false
Boolean(NaN);       //-> false
Boolean('');        //-> false

Boolean(' ');       //-> true
Boolean(17);        //-> true
Boolean('2');       //-> true
Boolean('Hello!');  //-> true











