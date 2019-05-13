const fillBookOverview = (overviewElement, book) => {
    // console.log(overviewElement, book);
    overviewElement.querySelector('h1').textContent = book.title;
    overviewElement.querySelector('p.subtitle').textContent = book.subtitle;

    const bookImage = createBookImage(book);
    overviewElement.querySelector('div.book-detail-img').appendChild(bookImage);

    overviewElement.querySelector('p.isbn').textContent = book.isbn;
    overviewElement.querySelector('p.author').textContent = book.author;
    overviewElement.querySelector('p.publisher').textContent = book.publisher;
    overviewElement.querySelector('p.pages').textContent = book.pages;
    overviewElement.querySelector('p.price').textContent = book.price;

    overviewElement.querySelector('p.description').textContent = book.description;
};

const createBookImage = (book) => {
    const bookImage = document.createElement('img');

    //als bookimage is een string EN hij is gevuld

    const imageUrl = (typeof book.image === 'string' && book.image) ? book.image : '../images/default-book.png';

    bookImage.setAttribute('src', imageUrl);
    bookImage.setAttribute('alt', book.title);
    bookImage.setAttribute('title', book.title);

    //ALTERNATIEVE MANIER
    // let attributes = [
    //     {
    //         name: 'src',
    //         value: imageUrl
    //     },
    //     {
    //         name: 'alt',
    //         value: book.title
    //     },
    //     {
    //         name: 'title',
    //         value: book.title
    //     }
    // ];
    //
    // for (let i = 0; i < attributes.length; i++) {
    //
    //     // console.log(attributes[i].name);
    //     bookImage.setAttribute(attributes[i].name, attributes[i].value);
    // }

    return bookImage;
};




// const createBookImage = (imageUrl) => {
//     const bookImage = document.createElement('img');
//     if (typeof imageUrl === 'undefined' || imageUrl === '') {
//         imageUrl = '../images/default-book.png';
//     }
//     bookImage.setAttribute('src', imageUrl);
//
//     return bookImage;
// };