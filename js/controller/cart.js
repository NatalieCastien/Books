document.addEventListener('DOMContentLoaded',function () {
    updateCartAmount(getCartAmount());
    const tableElement = document.querySelector('table.book-index');

    // const books = getBooksCart();
    // fillBookTable(tableElement, books);
});



// cartBooksList.forEach(function(element) {
//     console.log(element);
// });

const getID = () => {
    let jsonBookIds = sessionStorage.getItem('bookIds');
    let bookIds = [];

    if(jsonBookIds){
        bookIds = JSON.parse(jsonBookIds);
    }
    bookIds.forEach(function(element) {
        console.log(element);
        fillCartTable(element);
    });
    return bookIds;
};

getID();