const addBookToCart = (bookId) => {
    const bookIds = getBookIdsFromSession();

    console.log(bookIds);
    // sessionStorage.setItem('bookId', bookId);
    bookIds.push(bookId);
    sessionStorage.setItem('bookIds', JSON.stringify(bookIds));
};

const getCartAmount = () => {
    const bookIds = getBookIdsFromSession();
    return bookIds.length;
};

const getBookIdsFromSession = () => {
    let jsonBookIds = sessionStorage.getItem('bookIds');
    let bookIds = [];

    if(jsonBookIds){
        bookIds = JSON.parse(jsonBookIds);
    }
    return bookIds;
};