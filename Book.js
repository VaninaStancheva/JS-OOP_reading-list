class Book {
    constructor (title, author, genre, isRead = false, readDate = null) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isRead = isRead;
        this.readDate = readDate;
    }
}

module.exports = Book