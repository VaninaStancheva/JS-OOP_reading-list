const BookList = require('./BookList');
const Book = require('./Book');

const firstBook = new Book ('Little Prince', 'André Juillard', 'comic book');
const secondBook = new Book ('Shogun v 1', 'James Clavel', 'Historical fiction');
const thirdBook = new Book ('Shogun v 2', 'James Clavel', 'Historical fiction', true);
const fourthBook = new Book ('The fountainhead', 'Ain Rand', 'Psychological fiction');

const bookList = new BookList();

bookList.addBook(firstBook);
bookList.addBook(secondBook);
bookList.addBook(thirdBook);
bookList.addBook(fourthBook);
