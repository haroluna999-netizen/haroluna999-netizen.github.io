let pares = [];


for (let i = 0; i < 100; i++) {
    pares[i] = i * 2;
}


for (let i = 0; i < pares.length; i++) {
    if (i % 2 !== 0) {
        console.log(`Índice ${i}: ${pares[i]}`);
    }
}