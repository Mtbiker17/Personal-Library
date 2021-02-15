let addBookButton = document.getElementById('addBookButton');

let modal = document.getElementById("bookModal");
let span = document.getElementsByClassName("close")[0];
let saveBook = document.getElementById('saveBookInfo');
let myLibrary = [];

function Book(){
    //the constructor

}

function addBookToLibrary(){
let bookTitle = document.getElementById("bookTitle").value;
let bookAuthor = document.getElementById("bookAuthor").value;
if(bookTitle === "" || bookAuthor === ""){
        alert("Book Title and Author Required");
        return;
    }
    modal.style.display = "block";
}

function saveBookInfo(){
  let title = document.getElementById("bookTitle").value;
  let author = document.getElementById("bookAuthor").value;
  let read = document.getElementById("read").value;
  let pages = document.getElementById("pages").value;
  let recommend = document.getElementById("recommend").value;
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


saveBook.addEventListener('click', saveBookInfo);
addBookButton.addEventListener('click', addBookToLibrary);