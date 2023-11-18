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

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        console.log(book.title, book.author, book.pages, book.isRead);
        var table = document.getElementById("myTable");
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = book.title;
        cell2.innerText = book.author;
        cell3.innerText = book.pages;
        cell4.innerText = book.isRead;
    }
}


function submitForm() {
    var name = document.getElementById("inputName").value;
    var author = document.getElementById("inputAuthor").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("iRead").value;
    addBookToLibrary(name, author, pages, read);
    displayBooks();
     alert('Form submitted!');
}
