function sumar() {
let n1, n2, suma;

alert ("este algoritmo suma dos numeros ingresados por el usuario");
n1=parseFloat(prompt("ingrese el primer valor"));
n2=parseFloat(prompt("ingrese el segundo valor"));

(suma= n1 + n2)

alert("el resultado de la suma es " +suma );

}

function operacionesBasicas() {
    let n1,n2,sumar,restar,dividir,multiplicar;
    
    alert("algoritmo que resuelva operaciones basicas");
    n1=parseFloat(prompt("ingrese el primer valor"));
    n2=parseFloat(prompt("ingrese el segundo valor"));

    sumar=n1 + n2;
    restar=n1 - n2;
    multiplicar=n1 * n2;
    dividir=n1 / n2;
    
        alert(
            "suma:" + sumar + "\n" +
            "resta:" + restar + "\n" +
            "multiplicacion:" + multiplicar + "\n" +
            "division" + dividir
        );
    }

  function areaPerimetroRectangulo() {
        let base, altura, area, perimetro;

        alert("algoritmo que calcula el area y el perimetro de un rectangulo");
        base=parseFloat(prompt("ingrese la base (metros)" ));
        altura=parseFloat(prompt("ingrese la altura (metros)" ));

        area=base * altura;
        perimetro= 2 * (base+altura);
        
        alert(
     "area disponible: " + area + "m²" + "\n" +
     "perimetro (contorno): "+ perimetro + "m"
        );
   
 }

  function calcularPromedio (a, b , c) {
    return (a + b + c) / 3;
}

function promedioNumeros() {
    let n1 = parseFloat(prompt("ingrese el primer numero"));
    let n2 = parseFloat(prompt("ingrese el segundo numero"));
    let n3 = parseFloat(prompt("ingrese el tercer numero"));

    let promedio = calcularPromedio(n1, n2 , n3);

    alert("el promedio de " + n1 + "," + n2 + "y" + n3 + "es: " + promedio);
}

function mayorDeEdad() {
let edad;

alert("algoritmo que verifica si una persona es mayor de edad");
edad = parseFloat(prompt("ingrese su edad"));

if (edad>= 18 ) {
    alert("tiene " + edad + "años es mayor de edad" );
}   else {
    alert("tiene " + edad + "años: es menor de edad" );
    }
}

function conversionTiempo() {
let segundos , minutos, horas;

alert("algoritmo que convierte segundos a minutos y horas");
segundos = parseFloat(prompt("ingrese la cantidad de segundos"));

minutos = segundos / 60;
horas = segundos / 3600;

alert(
  segundos + " segundos equivalen a : \n"  + 
  minutos + "minutos\n " +
  horas + " horas"
    );
}

function conversionTemperatura() {
    let celcius, fahrenheit, kelvin;

    alert("algoritmo que convierte grados celcius a fahrenheit y kelvin");
    celcius = parseFloat(prompt("ingrese la temperatura en grados celcius"));

    fahrenheit = (celcius * 9 / 5) + 32;
    kelvin = celcius + 273.15;

    alert(
   celcius + " °C equivalen a:\n" +
  fahrenheit + " °F\n" +
 kelvin + " K"
    );
}

function conversionPeso() {
    let kilogramos, gramos, libras, toneladas;

    alert("algoritmo que convierte kilogramos a gramos, libras y toneladas");
    kilogramos = parseFloat(prompt("ingrese el peso en kilogramos"));

    gramos = kilogramos * 1000;
    libras = kilogramos * 2.20462;
    toneladas = kilogramos / 1000;

    alert(
      kilogramos + " kg equivalen a:\n" + 
      gramos + " gramos\n" +
      libras + " libras\n" + 
      toneladas + " toneladas"
    );  
}

function conversionLongitud() {
    let metros, centimetros, kilometros;

    alert("algoritmo que convierte metros a centimetros y kilometros");
    metros = parseFloat(prompt("ingrese la cantidad en metros"));

    centimetros = metros * 100;
    kilometros = metros / 1000;

    alert(
    metros + " m equivalen a:\n" +
    centimetros + " cm\n" +
    kilometros + " km"
    );
}

function pesoPlanetas() {
let pesoTierra, Luna, Mercurio, Venus, Marte, Jupiter, Saturno, Urano, Neptuno;

alert("algoritmo que calcula el peso de una persona en la tierra y en los planetas del sistema Solar");
pesoTierra = parseFloat(prompt("ingrese el peso en la tierra (kg)"));

Luna = pesoTierra * 0.165;
Mercurio = pesoTierra * 0.378;
Venus = pesoTierra * 0.907;
Marte = pesoTierra * 0.377;
Jupiter = pesoTierra * 2.36;
Saturno = pesoTierra * 0.916;
Urano = pesoTierra * 0.889;
Neptuno =   pesoTierra * 1.12;

alert(
"con un peso de " + pesoTierra + " kg en la tierra, pesarias:\n" +
Luna + " kg en la Luna\n" +
Mercurio + " kg en Mercurio\n" +
Venus + " kg en Venus\n" +
Marte + " kg en mMarte\n" +
Jupiter + " kg en Jupiter\n" +
Saturno + "kg en Saturno\n" +
Urano + " kg en Urano\n" +
Neptuno + "kg en Neptuno" );
}

function calculoCompra ()  {
    let Precio1, cantidad1, precio2, cantidad2, precio3, cantidad3;
    let valor1, valor2, valor3, Total;

 alert("algoritmo que calcula el valor de cada producto y el total de la compra");
 
        precio1 = parseFloat(prompt("ingrese el precio del producto 1"));
        cantidad1 = parseFloat(prompt("ingrese la cantidad del producto 1"));

        precio2 = parseFloat(prompt("ingrese el precio del producto 2"));
        cantidad2 = parseFloat(prompt("ingrese la cantidad del producto 2"));

        precio3 = parseFloat(prompt("ingrese el precio del producto 3"));
        cantidad3 = parseFloat(prompt("ingrese la cantidad del prodcuto 3"));

        valor1 = precio1 * cantidad1;
        valor2 = precio2 * cantidad2;
        valor3 = precio3 * cantidad3;

    alert(
        "producto 1: " + valor1 + "\n" +
        "producto 2: " + valor2 + "\n" +
        "producto 3: " + valor3 + "\n" +
        "Total de la compra: " + total
    );
}

function calcularSalario()  {
    let salarioMensual, diasTrabajados, auxilioTransporte, bonificaciones;
    let valorDia, salarioGanado, totalDevengado, pension, totalDescuentos, salarioNeto;

alert("algoritmo que calcula el pago de un trabajador");
    
    salarioMensual = parseFloat(prompt("ingrese el salario mensual"));
    diasTrabajados = parseFloat(prompt("ingrese los dias trabajados"));
    auxilioTransporte = parseFloat(prompt("ingrese el auxilio de transporte"));
    bonificaciones = parseFloat(prompt("ingrese el valor de bonificaciones"));

    valorDia = salarioGanado * 0.04;
    salarioGanado = valorDia * diasTrabajados;
    totalDescuentos = salud+ pension;

    salarioNeto = totalDevengado - totalDescuentos;

    alert(
        "salario por " + diasTrabajados + "dias: " + salarioGanado + "\n" +
        "auxilio de transporte: " + auxilioTransporte + "\n" +
        "bonificaciones: " + bonificaciones + "\n" +
        "total devengado: " + totalDevengado + "\n" +
        "Descuento salud (4%): " + salud + "\n" +
        "descuentos pension (4%): " + pension + "\n" +
        "total descuentos: " + totalDescuentos + "\n" + 
        "salario neto a pagar: " + salarioNeto
    );     
}

function facturaServicio() {
    let consumo, valorUnidad, porcentajeImpuesto;           
    let subtotal, impuesto, total;

    alert("algoritmo que calcula el subtotal , el impuesto y el total de una factura de servicio");

    consumo = parseFloa(prompt("ingrese el consumo del servicio"));
    valorUnidad = parseFloat(prompt("ingrese el valor por unidad"));
    porcentajeImpuesto = parseFloat(prompt("ingrese el porcentaje de impuestos"));

    subtotal = consumo  * valorUnidad;
    impuesto = subtotal * porcentajeImpuesto / 100;
    total = subtotal + impuesto;

    alert(
        "subtotal: " + subtotal + "\n" +
        "impuesto: (" + porcentajeImpuesto + "%): " + impuesto + "\n" + 
        "total a pagar: " + total 
    );
}

function calcularCostoViaje() { 
    let distancia = parseFloat(prompt("Distancia recorrida (km): "));
    let consumo = parseFloat(prompt("consumo promedio del vehiculo (km por galon): "));
    let precio = parseFloat(prompt("precio del combustible (por galon): "));

    let galones = distancia / consumo;
    let costo = galones * precio;

    alert("Galones usados: " + galones + "\ncosto aproximado del viaje: $" + costo);
}

function calcularNotaFinal() {
    let nota1 = parseFloat(prompt("nota de la actividad 1: "));
    let porcentaje1 = parseFloat(prompt("porcentaje de la actividad 1 (%): "));

    let nota2 = parseFloat(prompt("nota de la actividad 2: "));
    let porcentaje2 = parseFloat(prompt("porcentaje de la actividad 2: (%): "));

    let nota3 = parseFloat(prompt("nota de la actividad 3: "));
    let porcentaje3 = parseFloat(prompt("porcentaje de la actividad 3: (%): "));

    let notaFinal = nota1 + porcentaje1 / 100 + nota2 * porcentaje2 / 100 + nota3 * porcentaje3 / 100;

    alert("la nota final del estudiante es: " + notaFinal
    );          
}
  
function convertirMonedas() {
    let pesos = parseFloat(prompt("valor en pesos colombianos: "));

    let tasaDolar = 4000;
    let tasaEuro = 4300;
    let tasaLibra = 5000;

    let Dolares = pesos / tasaDolar;
    let Euros = pesos / tasaEuro;
    let Libras = pesos / tasaLibra;

    alert("Dolares: "+ Dolares + "\nEuros: " + Euros + "\nLibras: " + Libras);
}

function calcularTiempoViaje() {
    let distancia = parseFloat(prompt("distancia de recorrido (km): "));
    let velocidad = parseFloat(prompt("velocidad promedio (km/h: "));

    let totalMinutos = distancia * 60  / velocidad;
    let minutos = totalMinutos % 60; 
    let horas = (totalMinutos - minutos) / 60;

    alert("Tiempo estimado de viaje: " + horas + " horas y " + minutos + " minutos ");
}

function  numeroPositivo() {
    let numero = parseFloat(prompt("ingresa un numero entero: "));

    if (numero > 0) {
 alert("el numero " + numero + " es positivo ");
    } else {
            alert("el numero " + numero + " no es positivo ");
    }
}

function parOImpar() {
    let numero = parseFloat(prompt("Ingrese un numero entero: "));

    if (numero % 2 == 0) {
        alert("El numero " + numero + " es par");
    } else {
        alert("El numero " + numero + " es impar");
    }
}

function mayorDeDos() {
    let N1 = parseFloat(prompt("Ingrese el primer numero: "));
    let N2 = parseFloat(prompt("Ingrese el segundo numero: "));

    if (N1 > N2) {
   alert("El mayor es: " + N1 );
     } else if (N2 > N1) {
    alert("El mayor es: " + N2);
 } else {
    alert("Los dos numeros son iguales");
 }
}

function descuentosCompra() {
let compra = parseFloat(prompt("Valor de la compra señor usuario: "));
let descuento = 0;

if (compra >= 200000) {
    descuentos = compra * 0.10;
}

let total = compra - descuentos;

alert("Descuentos: $"+ descuentos + "\ntotal a pagar: $" + total);
}

function temperaturaCiudad(){
let temperatura = parseFloat(prompt("Temperatura actual (°C:"));

if (temperatura > 30) {
    alert("La temperatura es alta: ") + temperatura + " °"
 }
}

function mayorDeEdad() {
     let edad; alert("algoritmo que verifica si una persona es mayor de edad");
      edad = parseFloat(prompt("ingrese su edad "));
       if (edad>= 18 ) { alert(" tiene " + edad + " años es mayor de edad" );

        } else { alert(" tiene " + edad + " años: es menor de edad" );
}
 }

 function mesN() {
 let mesN = parseInt(prompt("Ingrese el numero"));

 switch (mesN) {
     case 1 :
        console.log("Enero");
      break;
    case 2 :
        console.log("Febrero");
      break;
    case 3 :
        console.log("Marzo");
      break;
     case 4 :
        console.log("Abril");
      break;
    case 5 :
        console.log("Mayo");
      break;
    case 6 :
        console.log("Junio");
      break;
     case 7 :
        console.log("Julio");
      break;
    case 8 :
        console.log("Agosto");
      break;
    case 9:
        console.log("Septiembre");
      break;
      case 10 :
        console.log("Octubre");
      break;
    case 11 :
        console.log("Noviembre");
      break;
    case 12 :
        console.log("Diciembre");
      break; 
default:
    console.log("El mes ingresado por el usuario es: " + mesN);

    break;
    }
 }

 function retiroDinero() {
    let saldo = parseFloat(prompt("Dinero disponible en la cuenta: "));
    let retiro = parseFloat(prompt("Valor que desea retirar: ")); 

    if (retiro <= saldo) {
        let numeroSaldo = saldo - retirar;
        alert("Retiro exitoso. saldo restante: $" + nuevoSaldo);
    } else { 
    alert("saldo insuficiente");
    }
 }

function envioGratuito() { 
 let compra = parseFloat(prompt("Valor de la compra")); 
 let envio = 0; 

 if (compra >= 150000) {
    envio = 0;
 } else {
    envio = 12000;
 }

 let total = compra + envio;

 alert("Costo del envio: $" + envio + "\ntotal a pagar: $" + total);
}

function compararNumeros() {
let N1 = parseFloat(prompt("Ingrese el primer valor"));
let N2 = parseFloat(prompt("Ingrese el segundo valor"));

 if (N1 > N2) {
    alert(N1 +  " es mayor que " + N2); 
    } else if  (N1 < N2) {
    alert(N1 + " es Menor que " + N2);
    } else {
    alert(N1 + " es Igual que " + N2);
    }
}

function tarifaParqueadero() {
 let horas = parseFloat(prompt("Horas de permanencia"));
    let tarifa = 0;

    if (horas <= 1) {
        tarifa = 5000;
    } else if (horas <= 3) {
        tarifa = 10000;
     } else if (horas <= 6){
        tarifa = 18000;
    } else {
        tarifa = 25000;
    }
 alert("Horas: "+ horas + "\nvalor a pagar: $" + tarifa);
}

function tarifaTransporte () {
let edad = parseFloat(prompt("Ingrese la edad"));
 let pasaje = 0; 

   if (pasaje <= 5) {
       tarifa = 0;
   } else if (pasaje <= 17) {
       tarifa = 2000;
   } else if (pasaje <= 59) {
    tarifa = 3500
   } else { 
     pasaje = 2500;
   }
  
alert("edad: " + edad + "\nvalor del pasaje: $" + pasaje);
}

function clasificacionVelocidad()  {
 let velocidad = parseFloat(prompt("Velocidad del vehiculo (Km/): "));
 let clasificacion = "";

    if (velocidad <= 30) {
        clasificacion = "Baja";
    } else if  (velocidad <= 60) {
        clasificacion = "Moderado";
      }  else if (velocidad <= 100) {
        clasificacion = "Alta"; 
    } else {
    clasificacion = "muy alta";
} 

    alert("Velocidad "+ velocidad + " km/hClasificacion" + clasificacion);
    }

    function mesYDias () {
        let mes = parseFloat(prompt("Ingrese el numero del mes: "));
        let dias = 0; 

    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 9 || mes == 12) {
        dias = 31
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        dias = 30
    } else if (mes == 2) {
        dias = 28 
    } else {
        alert("mes no valido");
        return;
}
    alert("El mes " + mes + " Tiene " + dias + " dias");
 }

  function accesoAtraccion() {
 let edad = parseFloat(prompt("Ingrese la edad para aceptar o negar su entrada:"));
 let estatura = parseFloat(prompt("Ingrese la estatura en metros: "));
 
  if (edad >= 12 && estatura >= 1.40) {
    alert("Puede ingresar a la atraccion");
  } else {
    alert ("No puede ingresar a la atraccion");
  }
 }

  function descuentoCliente() {
 let tipo = prompt("Tipos de clientes (normal): ");
 let compra = parseFloat(prompt("Valor de la compra: "));

    if(tipo == "normal" && compra >=20000) {
        descuento = compra * 0,05;
    } else { 
             descuento = 0;
    }

     let total = compra - descuento;
     alert("Descuento: ") + descuento;
     alert("Total: ") + total;
 }

 function retirar() {
    let saldo = parseFloat(prompt("Saldo disponible: "));
    let retiro =parseFloat(prompt("Valor de retiro: "));
 if (retiro <= 0) { 
    alert("El valor debe ser mayor que 0");
 } else if (retiro % 10000 != 0) {
    alert("El valor debe ser multiplo de 10000");
 } else if (retiro > saldo) {
     alert("Saldo insuficiente");
 } else { 
    let nuevoSaldo = saldo - retirar;
    alert("Retiro exitoso. Nuevo saldo: " + nuevoSaldo); 
 }
}

function validarClave() {
    let clave = prompt("Ingresa la contraseña: ");
    let tieneNumero = clave.includes("0") || clave.includes("1") || clave.includes("2")
                      clave.includes("3") || clave.includes("4") || clave.includes("5") 
                      clave.includes("6") || clave.includes("7") || clave.includes("8")
                      clave.includes("9");

    if (clave.length != 8) {
        alert("La contraseña debe tener 8 caracteres");
    } else if (tieneNumero == false) {
        alert("La contraseña debe contener al menos un numero");
    } else if (clave == "12345678") {
        alert("La contraseña no puede ser 12345678")
    } else {
        alert("Contraseña valida");
    }
}

function esBisiesto() {
let year = parseFloat(prompt("Ingresa un año: "));

 if(year % 400 == 0) {
    alert(year + " es Bisiesto");
 } else if (year % 100 ==0 ) {
    alert(year + " no es Bisiesto");
 } else if (year % 4 == 0) {
    alert(year + " es Bisiesto");
 } else {
    alert( year + " no es es Bisiesto")
 }
}