import { Book } from './Book.js';

export class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    deleteBook(index) {
        this.books.splice(index, 1);
    }

    toggleRead(index) {
        this.books[index].toggleRead();
    }

    displayBooks() {
        const booksContainer = document.querySelector('#libraryContainer');
        booksContainer.innerHTML = '';
        this.books.forEach((book, index) => {
            booksContainer.innerHTML += this.createBookCard(book, index);
        });
    }

    createBookCard(book, index) {
        return `
        <div class="card" style="width: 18rem">
            <div class="card-header">${book.title}</div>
            <div class="card-body">
              <h3 class="card-title">${book.author}</h3>
              <p class="card-text">
                Number of pages : ${book.pages} <br>
                Status: <span style="color: ${book.read ? 'green' : 'red'};">
                          ${book.read ? "Already read" : "Not read yet"}
                        </span>
              </p>
              <div class="card-footer">
                <button class="btn blue" onclick="myLibrary.markAsRead(${index})">${book.read ? "Mark as unread" : "Mark as read"}</button>
                <button class="btn sweet" onclick="myLibrary.deleteBookAndDisplay(${index})">Delete</button>
              </div>
            </div>
          </div>
        `;
    }

    markAsRead(index) {
        this.toggleRead(index);
        this.displayBooks();
    }

    deleteBookAndDisplay(index) {
        this.deleteBook(index);
        this.displayBooks();
    }

    AddBookToLibrary() {
        if (!validateForm()) return;

        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const pages = parseInt(document.getElementById('pages').value);
        const read = document.getElementById('read').checked;

        const newBook = new Book(title, author, pages, read);
        this.addBook(newBook);
        this.displayBooks();

        document.getElementById('bookForm').reset();
        document.getElementById('closeModal').click();
    }
}
