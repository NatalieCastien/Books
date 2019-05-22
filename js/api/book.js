//Jquery

const getApiBooks = () => {
   return $.get('https://do-test-bookstore.bettywebblocks.com/api/v1/books');
};

const getApiBook = (id) => {
    return $.get(`https://do-test-bookstore.bettywebblocks.com/api/v1/books/${id}`);
};


