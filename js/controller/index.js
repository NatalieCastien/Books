document.addEventListener('DOMContentLoaded',function () {
    const tableElement = document.querySelector('table.book-index');

    fillBookTable(tableElement, getApiBooks());

    // const booksJson = '[{"id":3,"author":{"id":3,"name":"Robert C. Martin"},"created_at":"2019-04-24T11:21:24+02:00"}]';
    // const books = JSON.parse(booksJson);
    //
    // console.log(books);
});
