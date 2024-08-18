class BookList {
    constructor () {
        this.bookList = [];
        this.readBooks = 0;
        this.notReadBooks = 0;
        this.nextBook = {};
        this.currentBook = {};
        this.lastBook = {};
    }

    addBook (book) {
        this.bookList.push(book);
        this.setBookListState();
    }

    finishCurrentBook () {
        this.currentBook.readDate = new Date(Date.now());
        this.currentBook.isRead = true;
        this.readBooks++;
        this.lastBook = this.currentBook;
        this.setBookListState()
    }

    setBookListState() {
        const notReadBooks = this.bookList.filter(notReadBook => !notReadBook.isRead);
        this.notReadBooks = notReadBooks.length;
        this.currentBook = notReadBooks[0];
        this.nextBook = notReadBooks[1];
    }
}

module.exports = BookList;