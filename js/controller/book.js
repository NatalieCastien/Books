document.addEventListener('DOMContentLoaded',function () {
    const overviewElement = document.querySelector('.book-overview');
    const bookId = getQueryParameter('id');
    const book = getBookById(bookId);
    // const book = getBookByIndex(1);

    document.title = book.title;
    fillBookOverview(overviewElement, book);

});

const getQueryParameter = (parameter) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
};

