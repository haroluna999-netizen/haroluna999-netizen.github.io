const recetas = [
    { id: 1, nombre: "Salmorejo", ingredientes: "Tomate, aceite y pan" },
    { id: 2, nombre: "Gachas", ingredientes: "Harina, agua y azucar" },
    { id: 3, nombre: "Migas", ingredientes: "Pan, ajo y aceite" }
];

const coloresDisponibles = {
    pares: [
        "#FEF9E6", 
        "#D9EAFD", 
        "#E0F7E8", 
        "#FFE2E2", 
        "#F3E5F5"  
    ],
    impares: [
        "#FFF2DF", 
        "#DDF2FD", 
        "#E6F4EA", 
        "#FFEFD6", 
        "#FCE4EC"  
    ]
};

const nombresColoresPar = [
    "Crema",
    "Azul cielo",
    "Menta suave",
    "Rosa pastel",
    "Lavanda"
];

const nombresColoresImpar = [
    "Anaranjado",
    "Celeste claro",
    "Verde agua",
    "Beige",
    "Rosado"
];

const STORAGE_PAR_KEY = "tablaColorPar";
const STORAGE_IMPAR_KEY = "tablaColorImpar";

const tbody = document.getElementById("tablaBody");
const selectPar = document.getElementById("colorParSelect");
const selectImpar = document.getElementById("colorImparSelect");

function populateSelects() {
    // Llenar select para filas pares
    selectPar.innerHTML = "";
    for (let i = 0; i < coloresDisponibles.pares.length; i++) {
        const option = document.createElement("option");
        option.value = coloresDisponibles.pares[i];
        option.textContent = nombresColoresPar[i];
        selectPar.appendChild(option);
    }

    selectImpar.innerHTML = "";
    for (let i = 0; i < coloresDisponibles.impares.length; i++) {
        const option = document.createElement("option");
        option.value = coloresDisponibles.impares[i];
        option.textContent = nombresColoresImpar[i];
        selectImpar.appendChild(option);
    }
}

function renderTable(parColor, imparColor) {
    let html = "";
    recetas.forEach((receta, index) => {
        const numeroFila = index + 1;
        const esPar = (numeroFila % 2 === 0);
        const bgColor = esPar ? parColor : imparColor;
        html += `
            <tr style="background-color: ${bgColor}; transition: background 0.15s ease;">
                <td>${receta.id}</td>
                <td>${receta.nombre}</td>
                <td>${receta.ingredientes}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function setColorsAndSave(parColor, imparColor) {
    localStorage.setItem(STORAGE_PAR_KEY, parColor);
    localStorage.setItem(STORAGE_IMPAR_KEY, imparColor);
    if (selectPar.value !== parColor) selectPar.value = parColor;
    if (selectImpar.value !== imparColor) selectImpar.value = imparColor;
    renderTable(parColor, imparColor);
}

function onParColorChange() {
    const newParColor = selectPar.value;
    const currentImparColor = selectImpar.value;
    setColorsAndSave(newParColor, currentImparColor);
}

function onImparColorChange() {
    const currentParColor = selectPar.value;
    const newImparColor = selectImpar.value;
    setColorsAndSave(currentParColor, newImparColor);
}

function loadStoredColorsOrDefault() {
    let storedPar = localStorage.getItem(STORAGE_PAR_KEY);
    let storedImpar = localStorage.getItem(STORAGE_IMPAR_KEY);

    const defaultPar = coloresDisponibles.pares[0];
    const defaultImpar = coloresDisponibles.impares[0];

    let finalPar = defaultPar;
    let finalImpar = defaultImpar;

    if (storedPar && coloresDisponibles.pares.includes(storedPar)) {
        finalPar = storedPar;
    }
    if (storedImpar && coloresDisponibles.impares.includes(storedImpar)) {
        finalImpar = storedImpar;
    }

    selectPar.value = finalPar;
    selectImpar.value = finalImpar;

    return { parColor: finalPar, imparColor: finalImpar };
}

function init() {
    populateSelects();
    
    const { parColor, imparColor } = loadStoredColorsOrDefault();
    
    renderTable(parColor, imparColor);
    
    selectPar.addEventListener("change", onParColorChange);
    selectImpar.addEventListener("change", onImparColorChange);
}

document.addEventListener("DOMContentLoaded", init);