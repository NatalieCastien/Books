const updateCartAmount = (amount) => {
  document.querySelector('.cart-amount').textContent = amount;
};

const fillCartTable = (tableElement, booksCart) => {
  booksCart.forEach(function (book) {
    const bookTableRow = createBookTableRow(book);
    tableElement.appendChild(bookTableRow);
  })
}