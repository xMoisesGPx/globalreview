function sortTableByColumn(columnIndex) {
    const table = document.querySelector(".card-container tbody");
    const rows = Array.from(table.rows);

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim() === "-" ? -1 : parseInt(rowA.cells[columnIndex].textContent.trim());
        const cellB = rowB.cells[columnIndex].textContent.trim() === "-" ? -1 : parseInt(rowB.cells[columnIndex].textContent.trim());
        return cellB - cellA;
    });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    rows.forEach(row => table.appendChild(row));
}

document.getElementById("cameraHeader").addEventListener("click", () => sortTableByColumn(2));
document.getElementById("selfieHeader").addEventListener("click", () => sortTableByColumn(3));
document.getElementById("audioHeader").addEventListener("click", () => sortTableByColumn(4));
document.getElementById("displayHeader").addEventListener("click", () => sortTableByColumn(5));
document.getElementById("batteryHeader").addEventListener("click", () => sortTableByColumn(6));