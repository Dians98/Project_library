import { Book } from './Book.js';
import { Library } from './Library.js';

function validateForm() {
    let isValid = true;
    document.getElementById('titleFeedback').textContent = '';
    document.getElementById('authorFeedback').textContent = '';
    document.getElementById('pagesFeedback').textContent = '';

    const title = document.getElementById('title').value.trim();
    if (title === '') {
        document.getElementById('titleFeedback').textContent = 'Title is required';
        isValid = false;
    }

    const author = document.getElementById('author').value.trim();
    if (author === '') {
        document.getElementById('authorFeedback').textContent = 'Author is required';
        isValid = false;
    }

    const pages = document.getElementById('pages').value;
    if (pages === '' || isNaN(pages) || pages <= 0) {
        document.getElementById('pagesFeedback').textContent = 'Please enter a valid number of pages.';
        isValid = false;
    }

    return isValid;
}

window.validateForm = validateForm;

const myLibrary = new Library();
window.myLibrary = myLibrary;

myLibrary.addBook(new Book('Harry Potter', 'J.K. Rowling', 500, true));
myLibrary.addBook(new Book('Lord of the rings', 'J.R.R. Tolkien', 700, false));
myLibrary.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 300, true));
myLibrary.displayBooks();
