function sortTableByColumnAndUpdateRank(columnIndex) {
    const table = document.querySelector(".card-container tbody");
    const rows = Array.from(table.rows);

    // Crear un array de objetos {row, value} donde row es la fila y value es el valor de la celda en la columna seleccionada
    const rowValues = rows.map(row => {
        const cellValue = row.cells[columnIndex].textContent.trim() === "-" ? -1 : parseInt(row.cells[columnIndex].textContent.trim());
        return { row, value: cellValue };
    });

    // Ordenar las filas por los valores en la columna seleccionada de mayor a menor
    rowValues.sort((a, b) => b.value - a.value);

    // Eliminar todas las filas actuales
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Reagregar las filas en el nuevo orden y actualizar el Rank
    rowValues.forEach((rowValue, rank) => {
        rowValue.row.cells[0].textContent = rank + 1; // Actualizar el Rank
        table.appendChild(rowValue.row); // Reagregar la fila en el nuevo orden
    });
}

// Asignar eventos de clic en los encabezados para ordenar la tabla y actualizar Rank
document.getElementById("cameraHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(2); // Columna Camera
});
document.getElementById("selfieHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(3); // Columna Selfie
});
document.getElementById("audioHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(4); // Columna Audio
});
document.getElementById("displayHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(5); // Columna Display
});
document.getElementById("batteryHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(6); // Columna Battery
});