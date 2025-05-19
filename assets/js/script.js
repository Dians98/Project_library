/**Création de la classe librairie qui contient la liste des livres */
class Library {
    /**Constructeur : ici on initialise la librairie à vide, on va la remplir juste après */
    /**TABLEAU de BOOK (l'objet) */
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
        /**POur chaque livre contenu dans notre librairie, on crée une card */
        this.books.forEach((book, index) => {
            booksContainer.innerHTML += this.createBookCard(book, index);
        });
    }

    /**Fonction pour créer la card */
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
                <button class="btn sweet" onclick="myLibrary.deleteBook(${index})">Delete</button>
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
        if (!validateForm()) {
            return; // stop si validation échoue
        }
        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const pages = parseInt(document.getElementById('pages').value);
        const read = document.getElementById('read').checked;

        const newBook = new Book(title, author, pages, read);
        this.addBook(newBook);
        this.displayBooks();

        // Reset formulaire
        document.getElementById('bookForm').reset();

        const btn_close_modal = document.getElementById('closeModal');
        btn_close_modal.click();
        


    }
}

/**Classe Livre */
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function validateForm() {
    let isValid = true;

    // Réinitialiser les messages de feedback
    document.getElementById('titleFeedback').textContent = '';
    document.getElementById('authorFeedback').textContent = '';
    document.getElementById('pagesFeedback').textContent = '';

    // Valider le titre
    const title = document.getElementById('title').value.trim();
    if (title === '') {
        document.getElementById('titleFeedback').textContent = 'Title is required';
        isValid = false;
    }

    // Valider l'auteur
    const author = document.getElementById('author').value.trim();
    if (author === '') {
        document.getElementById('authorFeedback').textContent = 'Author is required';
        isValid = false;
    }

    // Valider le nombre de pages
    const pages = document.getElementById('pages').value;
    if (pages === '' || isNaN(pages) || pages <= 0) {
        document.getElementById('pagesFeedback').textContent = 'Please enter a valid number of pages.';
        isValid = false;
    }

    // Retourner l'état de validité du formulaire
    return isValid;
}

const myLibrary = new Library();

myLibrary.addBook(new Book('Harry Potter', 'J.K. Rowling', 500, true));
myLibrary.addBook(new Book('Lord of the rings', 'J.R.R. Tolkien', 700, false));
myLibrary.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 300, true));

myLibrary.displayBooks();















