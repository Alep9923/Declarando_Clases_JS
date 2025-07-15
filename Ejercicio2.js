//! Ejercicio 2: Sistemas de Empleados
//1- Clase Empleado con propiedades: nombre, puesto y salarioBase y método para calcularSalario que devuelva el salario base.
//2 - Clase Gerente que herede de Empleado y añada bonificación. Sobreescribe calcularSalario para que sume una bonificación.
//3 - Clase Desarrollador que herede de Empleado y añada lenguaje. El Salario es igual al base. 

class Empleado {
    constructor(nombre,edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase; 
    }

    calcularSalario(){
        console.log("El salario base de este empleado es de: " + this.nombre + " es " + this.salarioBase + ".");
    }
}

class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }

    calcularSalario() {
        const salarioTotal = this.salarioBase + this.bonificacion;
        console.log("El salario total de este gerente es de:" + this.nombre + " es " + salarioTotal + ".");
    }
}

class Desarrollador extends Empleado {
    constructor (nombre, edad, salarioBase, lenguaje) {
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }
    calcularSalario() {
        console.log("El salario de este Desarrollador es de: " + this.nombre + " es " + this.salarioBase + " y trabaja con el lenguaje " + this.lenguaje + ".");
    }
}

const empleado1 = new Empleado("Juan", 30, 3000);
empleado1.calcularSalario();

const gerente1 = new Gerente("Ana", 40, 5000, 1000);
gerente1.calcularSalario();

const desarrollador1 = new Desarrollador("Luis", 25, 4000, "JavaScript");
desarrollador1.calcularSalario();
