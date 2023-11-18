const myLibrary = [];

function Book(title, author, pages, isRead) {
    // Book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    // Create a new book and add it to the library
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}
let i = 0 ; 
function displayBooks(){
        const book = myLibrary[i++];
        console.log(book.title, book.author, book.pages, book.isRead);
}
}

function deletethisBook(){
    myLibrary.pop();
    displayBooks(); 
}

function submitForm(){
    var name = document.getElementById("inputName").value;
    var author = document.getElementById("inputAuthor").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("isRead").value;
    addBookToLibrary(name, author, pages, read);
    displayBooks();
     alert('Form submitted!');
}
