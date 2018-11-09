//Arrays
operaciones=["+", "-"];

//variables
var numero_operaciones=operaciones.length;
var numero=Math.floor(Math.random()*numero_operaciones);
var numero1= +Math.floor(Math.random()*10 +1);
var numero2= +Math.floor(Math.random()*10 +1);


var operacion=(operaciones[numero]);


var resultado = prompt(`Introduzca resultado ${numero1} ${(operaciones[numero])} ${numero2} =`);

var correccion = eval(`${numero1} ${(operaciones[numero])} ${numero2}`);

if(resultado==correccion)
{alert("Correcto")}

  else
  {alert("Incorrecto")
  }
