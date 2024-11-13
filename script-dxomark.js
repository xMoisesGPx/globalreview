function sortTableByColumnAndUpdateRank(columnIndex) {
    const table = document.querySelector(".card-container tbody");
    const rows = Array.from(table.rows);

    const rowValues = rows.map(row => {
        const cellValue = row.cells[columnIndex].textContent.trim() === "-" ? -1 : parseInt(row.cells[columnIndex].textContent.trim());
        return { row, value: cellValue };
    });

    rowValues.sort((a, b) => b.value - a.value);

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    rowValues.forEach((rowValue, rank) => {
        rowValue.row.cells[0].textContent = rank + 1;
        table.appendChild(rowValue.row);
    });
}

document.getElementById("cameraHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(2);
});
document.getElementById("selfieHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(3);
});
document.getElementById("audioHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(4);
});
document.getElementById("displayHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(5);
});
document.getElementById("batteryHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(6);
});