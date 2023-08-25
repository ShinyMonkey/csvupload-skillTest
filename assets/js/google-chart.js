google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(init);

function init() {
    

    const columnSelect = document.getElementById('columnSelect');
    const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    header.forEach((column, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = column;
        columnSelect.appendChild(option);
    });


    columnSelect.addEventListener('change', () => {
        const selectedColumnIndex = columnSelect.value;

        // Clear existing table rows
        dataTable.innerHTML = '';

        data.forEach((row, rowIndex) => {
            const rowElement = document.createElement('tr');
            const cellIndex = header[selectedColumnIndex];

            const cellIndexElement = document.createElement('td');
            cellIndexElement.textContent = rowIndex + 1;
            rowElement.appendChild(cellIndexElement);

            const cellValueElement = document.createElement('td');
            cellValueElement.textContent = row[cellIndex];
            rowElement.appendChild(cellValueElement);

            dataTable.appendChild(rowElement);
        });
    });
}







