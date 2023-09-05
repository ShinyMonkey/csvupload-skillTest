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

        data.forEach((row) => {
            const rowElement = document.createElement('tr');
            const cellIndex = header[selectedColumnIndex];
        
            const cellValueElement = document.createElement('td');
            cellValueElement.textContent = row[cellIndex];
            rowElement.appendChild(cellValueElement);
        
            dataTable.appendChild(rowElement);
        });
    });
}







