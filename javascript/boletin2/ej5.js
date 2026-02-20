let matriz = [];
for (let i=0; i<10; i++) {
    matriz[i]=[];
    for(let j = 0; j<10; j++) {
        matriz[i][j]=i+j;
    }
}
for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
        console.log("[" + i + "][" + j + "]=>" + matriz[i][j]);
    }
}