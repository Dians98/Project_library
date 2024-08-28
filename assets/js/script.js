alert('Linked')
let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: 500,
        read: true
    },
    {
        title: 'Lord of the rings',
        author: 'J.R.R. Tolkien',
        pages: 700,
        read: false
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 300,
        read: true
    }
];


displayBooks();

//Constructor
function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



// Fonction pour générer une carte HTML pour un livre
function createBookCard(book, index) {

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
            <button class="btn blue" onclick="markAsRead(${index})">${book.read ? "Mark as unread" : "Mark as read"}</button>
            <button class="btn sweet" onclick="deleteBook(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
}

function displayBooks() {
    const booksContainer = document.querySelector('#libraryContainer');
    booksContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        booksContainer.innerHTML += createBookCard(book, index);
    });
}

function markAsRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function addBook() {
    if (validateForm()) {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const read = document.querySelector('#read').checked;
        const book = new Book(title, author, pages, read);
        addBookToLibrary(book);
        //closeModal
        document.querySelector('#closeModal').click();
        displayBooks();
    }

}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
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

//VITA








