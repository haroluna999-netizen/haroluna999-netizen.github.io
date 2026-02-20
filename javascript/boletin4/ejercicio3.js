let impares = [];


for (let i = 0; i < 100; i++) {
    impares[i] = i * 2 + 1;
}


for (let i = impares.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(`Índice ${i}: ${impares[i]}`);
    }
}