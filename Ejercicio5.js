//! Ejercicio 5 Sistema de Animales
//1- Clase Animal con propiedades: nombre y edad y método emitirSonido.
//2- Clase Perro que herede de animal y sobreescriba emitirSonido.
//3- Clase Gato que herede de animal y sobreescriba emitirSonido.

class animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido() {
        console.log("El animal " + this.nombre + " emite un sonido.");
    }
}

class Perro extends animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    emitirSonido() {
        console.log("El perro " + this.nombre + " ladra.");
    }
}

class Gato extends animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    emitirSonido() {
        console.log("El gato " + this.nombre + " maulla.");
    }
}

const miPerro = new Perro("Alan", 5);
miPerro.emitirSonido();

const miGato = new Gato("Rick", 3);
miGato.emitirSonido();


