document.addEventListener('DOMContentLoaded',function () {
    const tableElement = document.querySelector('table.book-index');

    fillBookTable(tableElement, getBooks());

});