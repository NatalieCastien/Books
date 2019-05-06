const listBooksDetails = (books) => {
    const createBookListDetailsItem = (book) => {

        const bookListTitle = document.createElement('p');
        bookListTitle.textContent = book.title;


        const bookListAuthor = document.createElement('p');
        bookListAuthor.textContent = book.author;


        const bookListIsbn = document.createElement('p');
        bookListIsbn.textContent = book.isbn;
        bookListIsbn.className = 'd-none d-sm-table-cell';

        const bookListPrice = document.createElement('p');
        bookListPrice.textContent = book.price;
        bookListPrice.className = 'd-none d-sm-table-cell';

        bookListRow.appendChild(bookListTitle);
        bookListRow.appendChild(bookListAuthor);
        bookListRow.appendChild(bookListIsbn);
        bookListRow.appendChild(bookListPrice);

        return bookListRow;
    };

    const booksList = document.querySelector('tbody.books');

    books.forEach(function(book) {
        const bookListItem = createBookListItem(book);

        booksList.appendChild(bookListItem);
    });
};

listBooks(books);
books.forEach(function(book) {
    // console.log(book.author);
});