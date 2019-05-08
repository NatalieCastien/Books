const fillBookOverview = (overviewElement, book) => {
    console.log(overviewElement, book);
    overviewElement.querySelector('h1').textContent = book.title;
};