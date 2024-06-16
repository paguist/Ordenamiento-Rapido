// Función de partición de Hoare
function partitionHoare(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)]; // Pivote central
    let i = low - 1;
    let j = high + 1;

    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);

        do {
            j--;
        } while (arr[j] > pivot);

        if (i >= j) {
            return j; // Posición del pivote
        }

        // Intercambiar arr[i] y arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Función Quicksort
function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partitionHoare(arr, low, high);

        // Ordenar recursivamente las dos mitades
        quicksort(arr, low, pi);
        quicksort(arr, pi + 1, high);
    }
    return arr;
}

// Ejemplo de uso y salida
const array = [29, 10, 14, 37, 13, 8, 25, 31];
console.log("Array original:", array);

// Ordenar el array utilizando Quicksort
quicksort(array);

console.log("Array ordenado:", array);

/*Salidas 
Array original: [29, 10, 14, 37, 13, 8, 25, 31]
Array ordenado: [8, 10, 13, 14, 25, 29, 31, 37]
*/