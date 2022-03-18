function CantidadCaracteres() {
    let palabra = prompt("Ingrese la candena de caracteres");
    let cantidadCaracteres = palabra.trim().length;
    alert(`La cantidad de caracteres son de ${cantidadCaracteres}`);
};

function RecortarTexto() {
    let palabra = prompt("Ingrese la cadena de caracteres");
    let cantidadRecortar = prompt("Ingrese la cantidad a cortar")
    let cantidadRecortes = Number(cantidadRecortar);
    let textoRecortado = palabra.slice(0, cantidadRecortes);
    alert(`Texto: ${textoRecortado}`);
};

function ReturnArray() {
    let cadena = prompt("Ingrese la cadena de caracteres");
    let cadenaSeparada = cadena.split(" ");
    let arrayCadena = Array.from(cadenaSeparada);
    alert(`[${arrayCadena}]`);
};

function RepetirTexto() {
    let cadena = prompt("Ingrese la cadena de caracteres");
    let repeticiones = prompt("Ingrese la cantidad de veces que se repita");
    let arrayRepeticion = [];
    for (let i = 1; i < Number(repeticiones); i++) {
        arrayRepeticion.push([...arrayRepeticion, cadena]); // ...Operador Express
    };
    alert(arrayRepeticion);
};