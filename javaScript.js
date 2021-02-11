let addBookButton = document.getElementById('addBookButton');
let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let modal = document.getElementById("bookModal");
var span = document.getElementsByClassName("close")[0];
let myLibrary = [];

function Book(){
    //the constructor

}

function addBookToLibrary(){
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let read = document.getElementById("read").value;
    let pages = document.getElementById("pages").value;
    let recommend = document.getElementById("recommend").value;

    if(title === "" || author === ""){
        alert("Book Title and Author Required");
        return;
    }
    modal.style.display = "block";
        let newBook = {
        title: title,
        author: author,
        read: read,
        pages: pages,
        recommend: recommend
    }
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

addBookButton.addEventListener('click', addBookToLibrary);