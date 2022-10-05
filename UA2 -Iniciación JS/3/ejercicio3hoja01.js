//10 igual a 10
var operacion1 = (10 == 10);
//10 estrictamente igual a 10
var operacion2 = (10 === 10);
//10 estrictamente igual a 10.0
var operacion3 = (10 === 10.0);
//Laura igual a laura
var operacion4 = ("Laura" == "laura");
//Laura mayor que laura
var operacion5 = ("Laura" > "laura");
//Laura menor que laura
var operacion6 = ("Laura" < "laura");
//Cadena 123 igual a 123
var operacion7 = ("123" == 123);
//Cadena 123 estrictamente igual a 123 
var operacion8 = ("123" === 123);
//Cadena parseada a number 123 estrictamente igual a 123
var operacion9 = (parseInt("123") === 123);
alert(`La operacion 10 == 10 es ${operacion1}
La operacion 10 === 10 es ${operacion2}
La operacion 10 === 10.0 es ${operacion3}
La operacion Laura == laura es ${operacion4}
La operacion Laura > laura es ${operacion5}
La operacion Laura < laura es ${operacion6}
La operacion "123" == 123 es ${operacion7}
La operacion "123" === 123 es ${operacion8}
La operacion parseInt("123") === 123 es ${operacion9}`);