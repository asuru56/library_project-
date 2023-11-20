const myLibrary = [];

function Book(title, author, pages, isRead) {
    // Book constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

function addBookToLibrary(title, author, pages, isRead) {
    // Create a new book and add it to the library
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function displayBooks(){
    console.log(myLibrary);
};


let submitForm = document.querySelector("#inputForm");
submitForm.addEventListener("submit",function(event){
    event.preventDefault();
    var name = document.getElementById("inputName").value;
    var author = document.getElementById("inputAuthor").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("isRead").value;
    addBookToLibrary(name, author, pages, read);
     alert('Form submitted!');
     var page = document.querySelector("#inputForm");
    page.style.display = "none"
    displayBooks(); 
     

}); 

let newBook = document.querySelector("#new_button") ;

newBook.addEventListener("click", function(){
    var page = document.querySelector("#inputForm");
    page.style.display = "block"; 
})
