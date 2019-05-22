const getGitHubProfile = () => {
    return $.get('https://api.github.com/users/nataliecastien');
};
const getApiBooks = () => {
    return $.get('https://do-test-bookstore.bettywebblocks.com/api/v1/books');
};

const getApiBook = (id) => {
    return $.get(`https://do-test-bookstore.bettywebblocks.com/api/v1/books/${id}`);
};

const fillAboutInfo = (profile) => {
    const aboutElement = document.querySelector('div.about');
    console.log("hier gaat het nog goed");
    aboutElement.querySelector('h4').textContent = profile.login;
    aboutElement.querySelector('p.id').textContent = profile.id;
    aboutElement.querySelector('p.avatar').textContent = profile.avatar_url;
    aboutElement.querySelector('p.url').textContent = profile.repos_url;
    console.log("hier gaat het nog steeds goed");

};

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

    return bookImage;
};

const fillBookTable = (tableElement, books) => {
    books.forEach(function (book) {
        const bookTableRow = createBookTableRow(book);

        tableElement.appendChild(bookTableRow);
    });
};

const createBookTableRow = (book) => {
    const bookTableRow = document.createElement('tr');
    const bookLink = `book.html?id=${book.id}`;
    // const bookLink = 'book.html?id=' + book.id;

    bookTableRow.appendChild(createRowColumn(book.title, '', bookLink));
    bookTableRow.appendChild(createRowColumn(book.author));
    bookTableRow.appendChild(createRowColumn(book.isbn, 'd-none d-sm-table-cell'));
    bookTableRow.appendChild(createRowColumn(book.price, 'd-none d-sm-table-cell'));

    return bookTableRow;
};

const createRowColumn = (text, className, link) => {
    const rowColumn = document.createElement('td');

    if (className) {
        rowColumn.className = className;
    }

    if (link) {
        const linkElement = document.createElement('a');
        linkElement.textContent = text;
        linkElement.setAttribute('href', link);
        rowColumn.appendChild(linkElement);
    }
    else {
        rowColumn.textContent = text;
    }

    return rowColumn;
};
