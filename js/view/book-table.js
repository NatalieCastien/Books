const fillBookTable = (tableElement, books) => {
    books.forEach(function (book) {
        const bookTableRow = createBookTableRow(book);

        tableElement.appendChild(bookTableRow);
    });
};

const createBookTableRow = (book) => {
    const bookTableRow = document.createElement('tr');

    bookTableRow.appendChild(createRowColumn(book.title));
    bookTableRow.appendChild(createRowColumn(book.author));
    bookTableRow.appendChild(createRowColumn(book.isbn, 'd-none d-sm-table-cell'));
    bookTableRow.appendChild(createRowColumn(book.price, 'd-none d-sm-table-cell'));

    return bookTableRow;
};

const createRowColumn = (text, className) => {
    const rowColumn = document.createElement('td');
    rowColumn.textContent = text;
    if (className) {
        rowColumn.className = className;
    }

    return rowColumn;
};
