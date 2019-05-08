document.addEventListener('DOMContentLoaded',function () {
    const overviewElement = document.querySelector('.book-overview');
    const book = getBookByIndex(2);

    document.title = book.title;
    fillBookOverview(overviewElement, book);
});