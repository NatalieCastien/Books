const fillBookOverview = (overviewElement, book) => {
    console.log(overviewElement, book);
    overviewElement.querySelector('h1').textContent = book.title;
    overviewElement.querySelector('p.subtitle').textContent = book.subtitle;

    //WERKT NIET
    // overviewElement.querySelector('img.book-image').src = book.image;

    overviewElement.querySelector('p.isbn').textContent = book.isbn;
    overviewElement.querySelector('p.author').textContent = book.author;
    overviewElement.querySelector('p.publisher').textContent = book.publisher;
    overviewElement.querySelector('p.pages').textContent = book.pages;
    overviewElement.querySelector('p.price').textContent = book.price;

    overviewElement.querySelector('p.description').textContent = book.description;

};