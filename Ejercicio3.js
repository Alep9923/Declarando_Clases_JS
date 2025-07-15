//! Sistema de Productos Electrónicos
//1- Clase Producto con propiedades: nombre, precio, marca y método descripción
//2- Clase Telefono que herede de Producto y añada almacenamiento y ram
//3- Clase Laptop que herede de Producto y añada procesador y pulgadas

class Producto{
    constructor(nombre, precio, marca){
        this.nombre = "nombre";
        this.precio = precio;
        this.marca = marca;
    }

    descripcion() {
        console.log("El producto indicado es: " + this.nombre + " pertence a la marca " + this.marca + " su precio de venta es de " + this.precio + ".");
    }
}

class Telefono extends Producto {
    constructor(nombre, precio, marca, almacenamiento, ram) {
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }

    descripcion() {
        super.descripcion();
        console.log("El teléfono seleccionado tiene " + this.almacenamiento + " como almacenamiento y cuenta con " + this.ram + " de RAM.");
    }
}

class Laptop extends Producto {
    constructor(nombre, precio, marca, procesador, pulgadas) {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }

    descripcion() {
        super.descripcion();
        console.log("La laptop cuenta con un procesador de " + this.procesador + " y una pantalla de " + this.pulgadas + " pulgadas.");
    }
}

const miTelefono = new Telefono("iPhone 13", 999, "Apple", "128GB", "4GB");
miTelefono.descripcion();

const miLaptop = new Laptop("Dell XPS 13", 1299, "Dell", "Intel i7", "13.3");
miLaptop.descripcion();

const miProducto = new Producto("Auriculares", 199, "Sony");
miProducto.descripcion();