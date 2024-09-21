// classSpec.js

describe("Book Class", function () {
    let book;

    beforeEach(function () {
        book = new Book('1984', 'George Orwell', 1949, 'Dystopian', 328);
    });

    it("should create a book instance with title, author, year, genre, and pages", function () {
        expect(book.title).toEqual('1984');
        expect(book.author).toEqual('George Orwell');
        expect(book.year).toEqual(1949);
        expect(book.genre).toEqual('Dystopian');
        expect(book.pages).toEqual(328);
    });

    it("should return a summary of the book", function () {
        expect(book.getSummary()).toEqual('1984 by George Orwell, published in 1949.');
    });

    it("should return true if the book is a classic (more than 30 years old)", function () {
        expect(book.isClassic()).toBe(true);
    });

    it("should return false if the book is not a classic", function () {
        let newBook = new Book('The Midnight Library', 'Matt Haig', 2020, 'Fiction', 304);
        expect(newBook.isClassic()).toBe(false);
    });

    it("should update the year the book was published", function () {
        book.updateYear(2022);
        expect(book.year).toEqual(2022);
        expect(book.getSummary()).toEqual('1984 by George Orwell, published in 2022.');
    });

    it("should return true if the book has more than 400 pages", function () {
        let longBook = new Book('War and Peace', 'Leo Tolstoy', 1869, 'Historical Fiction', 1225);
        expect(longBook.isLongBook()).toBe(true);
    });

    it("should return false if the book has 400 or fewer pages", function () {
        expect(book.isLongBook()).toBe(false);
    });

    it("should return the correct genre of the book", function () {
        expect(book.getGenre()).toEqual('Dystopian');
    });

    // Test for processing a list of titles
    it("should return an array of title lengths", function () {
        const titles = ['1984', 'War and Peace', 'The Catcher in the Rye'];
        const lengths = Book.processTitles(titles);
        expect(lengths).toEqual([4, 13, 21]);
    });
});
