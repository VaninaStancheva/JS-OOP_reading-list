const BookList = require('./BookList');
const Book = require('./Book');
const HorrorBook = require('./HorrorBook')

const firstBook = new Book ('Little Prince', 'André Juillard', 'comic book');
const secondBook = new Book ('Shogun v 1', 'James Clavel', 'Historical fiction');
const thirdBook = new Book ('Shogun v 2', 'James Clavel', 'Historical fiction');
const fourthBook = new Book ('The fountainhead', 'Ain Rand', 'Psychological fiction');

const horrorBookOne = new HorrorBook('The shining', 'Stephan King', 'horror');
const horrorBookTwo = new HorrorBook('It', 'Stephan King', 'horror');


const bookList = new BookList();

bookList.addBook(firstBook);
bookList.addBook(secondBook);
bookList.addBook(thirdBook);
bookList.addBook(fourthBook);
bookList.addBook(horrorBookOne);
bookList.addBook(horrorBookTwo);

bookList.finishCurrentBook();
bookList.finishCurrentBook();
bookList.finishCurrentBook();
bookList.finishCurrentBook();
bookList.finishCurrentBook();

horrorBookTwo.rate()
horrorBookTwo.rate()

console.log(bookList);
