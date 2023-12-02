// 1.Implementar un goritmoal que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.

        function algorismo(argumento1,argumento2){
        return argumento1+argumento2;
        }
       console.log( `la suma de argumentos es: ${algorismo,(15,20)}`);

    

    // 2.   Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
function notas(examen1,examen2,examen3,examen4) {
    return (examen1+examen2+examen3+examen4) / 4; 
}
console.log(`el promedio de notas es :${notas(15,14,18,12)}`);

//3# Calcular el área de un rectángulo

function areaRectangulo (base,altura) {
    return(base*altura);
}
console.log(`el area de un rectangulo es : ${areaRectangulo(20,15)}`);

//4# Calcular el área de un triángulo

function areaTriangulo(base,altura) {
    return((base*altura)/2);
}
console.log(`el area de un triangulo es :${areaRectangulo(15,12)}`);

//5# Calcular el área de una circunferencia
function areaCircunferencia(radio) {
    return((radio**2)*3.1416)
}
console.log(`el area de una circunferencia es :${areaCircunferencia(15)}`);

// 6#Determinar el sueldo semanal de un trabajador basándose en 
// sus horas trabajadas y su salario de hora hombre

function trabajador(salario,horas) {
    
    return((salario*horas)*6)
}
console.log(trabajador(50,8)+ " sueldo semanal");


//7# Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 metros).
metro=39.37

function modista(metros) {
    return(39.37*metros)
}
    console.log(modista(10)+" pulgadas");

    // #8 Una empresa importadora desea determinar cuántos dólares puede adquirir 
    // con equis cantidad de dinero peruano.
    function empresa(soles) {
        return(soles/3.65)
    }
    console.log(empresa(500)+" dolares");

    //9# Una empresa que contrata personal requiere determinar la edad de las personas que solicitan
    //  trabajo, pero cuando se les realiza la entrevista 
    // sólo se les pregunta el año en que nacieron

    function calcularedad(edad) {
        return(2023-edad)
    }
    console.log(calcularedad( 1988)+" años");

    // #10 Se tiene el nombre y la edad de tres personas. Se desean saber el nombre y
    //  la edad de la persona de menor edad.
    let carlos=19
    let cesar=22
    let cristian=16

    function personaMenorEdad(persona1, edad1, persona2, edad2, persona3, edad3) {
        let personaMenor = "";
        let edadMenor = Infinity; // Inicializar con un valor muy grande para asegurar que se reemplace
    
        // Comparar edades y actualizar si se encuentra una edad menor
        if (edad1 < edadMenor) {
            personaMenor = persona1;
            edadMenor = edad1;
        }
    
        if (edad2 < edadMenor) {
            personaMenor = persona2;
            edadMenor = edad2;
        }
    
        if (edad3 < edadMenor) {
            personaMenor = persona3;
            edadMenor = edad3;
        }
    
        // Imprimir resultados
        console.log(`La persona de menor edad es ${personaMenor} con ${edadMenor} años.`);
    }
    
    // Llamar a la función con datos específicos
    personaMenorEdad("Persona1", 25, "Persona2", 30, "Persona3", 22);

    // 11 # Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo 
    // ,que permita determinar el bono que recibirá un trabajador
    
 
function bono(edad) {
    if (edad==1){
        return "Recibe $100"
    }
    else if(edad==2){
        return "Recibe $200"
}
    else if(edad==3){
    return "Recibe $300"
}
    else if(edad==4){
    return "Recibe $400"
    }
    else if(edad==5){
        return "Recibe $500"
    }
    else if (edad>5) {
        return "Recibe $1000"
    }}

    console.log(bono(5));

    // 12# Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado.

    function salario(año) {
        let incremento= 1500 +(1500 *0.10)
        let incremento2=incremento+(incremento*0.10)
        let incremento3=incremento2+(incremento2*0.10)
        let incremento4=incremento3+(incremento3*0.10)
        let incremento5=incremento4+(incremento4*0.10)
        let incremento6=incremento5+(incremento5*0.10)
       
        if (año==1) {
            return incremento;
        }else if (año==2) {
            return incremento2;
        }else if (año==3) {
            return incremento3;
        } else if (año ==4) {
            return incremento4;
        } else if (año ==5) {
            return incremento5;
        } else if (año ==6) {
            return incremento6;
        }
    }
    console.log(salario(3) +" se imcremento");


    //13# Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados.
    function calificaciones(alumnos) {
        let aprobados= Infinity; 
        let desaprobados= Infinity; 
       
       
        if (alumnos>10) {
            return "aprobado";
        }else if(alumnos<=10){
            return "desaprobado";
        }
    }
    console.log(calificaciones(11) );


    // 14 # Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos(matrices), el número de focos de cada color que hay en existencia.
 
function fabricaDeFocos(verdes, blancos, rojos,azul) {
    // Verificar si los argumentos son válidos (no negativos)
    if (verdes < 0 || blancos < 0 || rojos < 0) {
        return "Error: Los argumentos deben ser números no negativos.";
    }

    // Contar el número de focos de cada color
    let resultado = {
        verdes: verdes,
        blancos: blancos,
        rojos: rojos,
        azul: azul,
    };

    return resultado;
}

// Ejemplo de uso
let resultadoConteo = fabricaDeFocos(100, 500, 8,150);
console.log("Número de focos verdes: " + resultadoConteo.verdes);
console.log("Número de focos blancos: " + resultadoConteo.blancos);
console.log("Número de focos rojos: " + resultadoConteo.rojos);
console.log("Número de focos azul: " + resultadoConteo.azul);

//15 # Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones.

function elecciones(persona) {
    if (persona<18) {
        return "no puede votar"
    }else if (persona>=18) {
        return "si puedes votar"
    }
}
console.log(elecciones(15));