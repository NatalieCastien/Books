document.addEventListener('DOMContentLoaded',function () {
    updateCartAmount(getCartAmount());
    const tableElement = document.querySelector('table.book-index');

/*
    getApiBooks()
        .done((books, text) => {
            fillBookTable(tableElement, books);
            console.log(books);
        })
        .fail((request, status, error) => {
            console.log(request, status, error);
        });
*/

    const books = getBooks();
    fillBookTable(tableElement, books);


    // const booksJson = '[{"id":3,"author":{"id":3,"name":"Robert C. Martin"},"created_at":"2019-04-24T11:21:24+02:00"}]';
    // const books = JSON.parse(booksJson);
    //
    // console.log(books);
});
