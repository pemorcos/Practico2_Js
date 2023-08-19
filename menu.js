let numeros = [];
let opcion = "";
let dim= 0;

while (opcion !== "S") {
    opcion = prompt("Seleccione la operación que desea realizar." + "\n"
                            + "C - Cargar Vector" + "\n"
                            + "A - Agregar Elemento al Vector" + "\n"
                            + "E - Eliminar Elemento al Vector" + "\n"
                            + "O - Ordenar el Vector" + "\n"
                            + "P - Mostrar Vector" + "\n"
                            + "T - Total del Vector" + "\n"
                            + "S - SALIR");

    switch (opcion.toUpperCase()) {
        case "C":
            dim = prompt("Ingrese la cantidad de elementos para el Vector");
            for (let i = 0; i < dim; i++) {
                let numero = prompt("Ingrese el número en la posición " + i +" del Vector por favor");
                numero = +numero;
                if (!Number.isNaN(numero)) {
                numeros.push(numero);
                }   
            }
            break;
        case "A":
            let numero = prompt("Ingrese un número por favor");
            numero = +numero;
            if (!Number.isNaN(numero)) {
                numeros.push(numero);
            }
            break;
        case "E":
            numeros.pop();
            break;
        case "P":
            alert(numeros);
            break;
        case "T":
            let acumulador = 0;
            numeros.forEach((elemento) => {
            acumulador += elemento;
            });
            alert("La sumatoria total es: " + acumulador);
            break;
        case "O":
            let hasta = 0
            let resp = prompt(
            "Desea ordenar: \n 1- Mayor a Menor \n 2 - Menor a Mayor"
            );
            if (resp === "1") {
                let back=0;
                hasta = length(numeros);
                for (let j = 0; j < hasta; j++) {
                    for (let i = 0; i < hasta-1; i++) {
                        if ((numeros[i]) < (numeros[i+1])) {
                            back=numeros[i];
                            numeros[i]=numeros[i+1];
                            numeros[i+1]=back;
                        }
                        
                    }
                }
                alert(numeros);

            } else if (resp === "2") {
            alert(
                numeros.sort(function (a, b) {
                return a - b;
                })
            );
            }
            break;
        case "S":
            let respuesta = prompt("Está seguro que desea finalizar? y/n");
            if (respuesta.toUpperCase() === "Y") {
            opcion = "S";
            } else {opcion=""}
        default:
            break;
    }                            
};
