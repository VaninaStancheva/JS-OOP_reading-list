class Book {
    constructor (title, author, genre, isRead, readDate = null) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isRead = false;
        this.readDate = readDate;
    }
}

module.exports = Book