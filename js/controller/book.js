document.addEventListener('DOMContentLoaded',function () {
    updateCartAmount(getCartAmount());

    const bookId = getQueryParameter('id');

    document.querySelector('.cart').addEventListener('click', function() {
        addBookToCart(bookId);
        updateCartAmount(getCartAmount());
    });

    const overviewElement = document.querySelector('.book-overview');

    // getApiBook(bookId)
    //     .done((book, text) => {
    //         document.title = book.title;
    //         fillBookOverview(overviewElement, book);
    //         console.log(book);
    //     })
    //     .fail((request, status, error) => {
    //         console.log(request, status, error);
    //     });

    const book = getBookById(bookId);
    fillBookOverview(overviewElement, book);
    // const book = getBookByIndex(1);

});

const getQueryParameter = (parameter) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
};

