const books = [
    {
        id: 1,
        isbn: 9780132350884,
        title: 'Clean Code',
        subtitle: 'A Handbook of Agile Software Craftmanship',
        author: 'Robert C. Martin',
        price: 35.95,
        pages: 464,
        publisher: 'Pearson Education',
        description: `Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.`,
        image: '../images/book-clean-code.jpg',
    },

    {
        id: 2,
        isbn: 9781449344917,
        title: 'Learning PHP Design Patterns',
        subtitle: '',
        author: 'William Sanders',
        price: 29.99,
        pages: 350,
        publisher: `O\'Reilly Media`,
        description: `Build server-side applications more efficiently and improve your PHP programming skills in the process by learning how to use design patterns in your code. This book shows you how to apply several object-oriented patterns through simple examples, and demonstrates many of them in full-fledged working applications.`,
        image: '../images/book-learning-php-design-patterns.jpg',
    },

    {
        id: 3,
        isbn: 9780321965516,
        title: `Don't make me think`,
        subtitle: 'A Common Sense Approach to Web Usability',
        author: 'Steve Krug',
        price: 43.99,
        pages: 216,
        publisher: "Pearson Education",
        description: `Since Don't Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug's guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it's one of the best-loved and most recommended books on the subject. Now Steve returns with fresh perspective to reexamine the principles that made Don't Make Me Think a classic-with updated examples and a new chapter on mobile usability.`,
        image: '../images/book-dont-make-me-think.jpg',
    }];

const listBooksDetail = (books) => {
    const createBookListItemDetail = (book) => {
        const parent = document.querySelector("div.title")
        const h1 = document.createElement('h1');

        h1.textContent = book.title;
        h1.className = 'font-weight-bold';

        parent.appendChild(h1);

        return parent;
    };

    books.forEach(function(book) {
        const bookListItemDetail = createBookListItemDetail(book);

        // parent.appendChild(bookListItemDetail);
    });
};

listBooksDetail(books);
books.forEach(function(book) {
    // console.log(book.author);
});




const listBooksSubtitle = (books) => {
    const createBookListItemSubtitle = (book) => {
        const parent = document.querySelector('div.subtitles');
        const p = document.createElement('p');

        p.textContent = book.subtitle;
        p.className = 'subtitle';

        parent.appendChild(p);

        return parent;
    };

    books.forEach(function(book) {
        const bookListItemSubtitle = createBookListItemSubtitle(book);

        parent.appendChild(bookListItemSubtitle);
    });
};

listBooksSubtitle(books);
books.forEach(function(book) {
    // console.log(book.author);
});

const listBooksIsbn = (books) => {
    const createBookListItemSubtitle = (book) => {
        const parent = document.querySelector('tr.isbn');
        const td = document.createElement('td');

        td.textContent = book.isbn;
        td.className = 'isbn';

        parent.appendChild(td);

        return parent;
    };

    books.forEach(function(book) {
        const bookListItemSubtitle = createBookListItemIsbn(book);

        parent.appendChild(bookListItemIsbn);
    });
};

listBooksIsbn(books);
books.forEach(function(book) {
    // console.log(book.author);
});