// pagination.js
const table = document.getElementById('table');
const pagination = document.getElementById('pagination');
const itemsPerPage = 100; // Maximum records per page
let currentPage = 1; // Current page counter

// const data = JSON.stringify(data); // Pass data from EJS to JavaScript

function displayPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = data.slice(start, end);

    // Clear previous data
    table.querySelector('tbody').innerHTML = '';

    // Display page data
    pageData.forEach(row => {
        const tr = document.createElement('tr');
        for (let h of header) { 
            const td = document.createElement('td');
            td.textContent = row[h];
            tr.appendChild(td);
        } 
        table.querySelector('tbody').appendChild(tr);
    });

    updatePagination(page, Math.ceil(data.length / itemsPerPage));
}

function updatePagination(currentPage, totalPages) {
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => displayPage(i));

        if (i === currentPage) {
            button.classList.add('active');
        }

        pagination.appendChild(button);
    }
}

displayPage(1);
