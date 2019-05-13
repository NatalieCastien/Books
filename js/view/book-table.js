const fillBookTable = (tableElement, books) => {
    books.forEach(function (book) {
        const bookTableRow = createBookTableRow(book);

        tableElement.appendChild(bookTableRow);
    });
};

const createBookTableRow = (book) => {
    const bookTableRow = document.createElement('tr');
    const bookLink = `book.html?id=${book.id}`;
    // const bookLink = 'book.html?id=' + book.id;

    bookTableRow.appendChild(createRowColumn(book.title, '', bookLink));
    bookTableRow.appendChild(createRowColumn(book.author));
    bookTableRow.appendChild(createRowColumn(book.isbn, 'd-none d-sm-table-cell'));
    bookTableRow.appendChild(createRowColumn(book.price, 'd-none d-sm-table-cell'));

    return bookTableRow;
};

const createRowColumn = (text, className, link) => {
    const rowColumn = document.createElement('td');

    if (className) {
        rowColumn.className = className;
    }

    if (link) {
        const linkElement = document.createElement('a');
        linkElement.textContent = text;
        linkElement.setAttribute('href', link);
        rowColumn.appendChild(linkElement);
    }
    else {
        rowColumn.textContent = text;
    }

    return rowColumn;
};
