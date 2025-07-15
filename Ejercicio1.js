//! Ejercicio 1: Sistema básico de Vehículos
// Crea un sistema de clases para representar diferentes tipos de vehículos.
// 1- Una clase Vehiculo con propiedades: marca, modelo, año y un método obtenerDetalles() que devuelva un string con toda la información.
// 2- Una clase Coche que herede de Vehiculo y añada una propiedad numeroPuertas
// 3- Una clase Moto que herede de vehiculo y añada la propiedad cilindrada

class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerDetalles() {
        console.log("La marca de este vehículo es " + this.marca + ", el modelo es " + this.modelo + " y el año es " + this.año + ".");
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDetalles() {
        super.obtenerDetalles();
        console.log("Este coche tiene " + this.numeroPuertas + " puertas.");
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    obtenerDetalles() {
        super.obtenerDetalles();
        console.log("Esta moto tiene un cilindraje de " + this.cilindrada + " cc.");
    }
}


const miCoche = new Coche("Toyota", "Corolla", 2020, 4);
miCoche.obtenerDetalles();

const miMoto = new Moto("Honda", "CB500", 2019, 500);
miMoto.obtenerDetalles();
