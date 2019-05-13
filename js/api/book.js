//Jquery

const getApiBooks = () => {
//    $.get('https://do-test-bookstore.bettywebblocks.com/api/v1/books')
    $.get('https://api.github.com/users/nataliecastien')
        .done((data, text) => {
            console.log(data);
        })
        .fail((request, status, error) => {
            console.log(request, status, error);
        });
};



