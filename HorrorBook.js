const Book = require('./Book');

class HorrorBook extends Book {
    constructor (title, author, genre, isRead, readDate, rating = 0 ) {
        super(title, author, genre, isRead, readDate = null);
        this.rating = rating;
    }

    rate() {
        this.rating++;
    }
}

module.exports = HorrorBook