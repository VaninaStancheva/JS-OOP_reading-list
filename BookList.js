class BookList {
    constructor () {
        this.bookList = [];
        this.readBooks = this.readBooksCounter();
        this.notReadBooks = this.notReadBooksCounter();
        this.nextBook = {};
        this.currentBook = {};
        this.lastBook = {};
    }

    addBook (book) {
        this.bookList.push(book);
    }

    finishCurrentBook (book) {
        book.isRead = true;
        book.readDate = new Date (Date.now());
        this.lastBook = book;
    }

    readBooksCounter() {
        this.finishCurrentBook()
        return this.bookList.filter(book => book.isRead === true).length;
    }

    notReadBooksCounter() {
        return this.bookList.filter(book => book.isRead === false).length;
    }

}

module.exports = BookList;