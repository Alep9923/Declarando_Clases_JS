//! Ejercicio 4 Sistema de Figuras Geométricas
//1- Clase Figura con propiedades: color y método area() que devuelve 0.
//2- Clae Rectangulo que herede de Figura y añada base y altura. Sobreescribe el método area() para calcular el área del rectángulo.
//3- Clase Circulo que herede de Figura y añada radio. Sobreescribe el método area() para calcular el área del círculo.

class Figura {
    constructor (color){
        this.color = color;
    }
    area(){
        return 0;
    }
 }

 class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
        console.log("El área del rectángulo bajo los parámetros indicados es: " + this.area() + " unidades cuadradas.");
    }
 }

 class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    area() {
        return Math.PI * Math.pow(this.radio, 2); // Linea consultada para obtener la constante PI y calcular el área del círculo. Se consulta pow para elevar al cuadrado el radio.
        console.log("El área del círculo bajo los parámetros indicados es: " + this.area() + " unidades cuadradas.");
    }

    area_metodo2(){
        const PI = 3.14159; // Definición de PI como constante
        return PI * this.radio * this.radio; // Cálculo del área del círculo usando la constante PI
        console.log("El área del círculo bajo los parámetros indicados es: " + this.area_metodo2() + " unidades cuadradas.");
    }
 }

 const miRectangulo = new Rectangulo("Rojo", 5, 10);
 console.log("El área del rectángulo es: " + miRectangulo.area() + " unidades cuadradas.");

 const miCirculo = new Circulo("Azul", 3);
 console.log("El área del círculo es: " + miCirculo.area() + " unidades cuadradas.");
 console.log("El área del círculo usando el segundo método es: " + miCirculo.area_metodo2() + " unidades cuadradas.");

