let addBookButton = document.getElementById('addBookButton');
let modal = document.getElementById("bookModal");
let span = document.getElementsByClassName("close")[0];
let saveBook = document.getElementById('saveBookInfo');
let bookContainer = document.getElementById('book-container');
let myLibrary = [];

function addBookToLibrary() {
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  if (bookTitle === "" || bookAuthor === "") {
    alert("Book Title and Author Required");
    return;
  }
  modal.style.display = "block";
}

function saveBookInfo() {
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
  const addBook = new Book(title, author, read, pages, recommend);
  console.log(myLibrary);
}

function displayBook() {

}

function Book(title, author, pages, read, recommend) {
  this.title = title,
    this.author = author,
    this.read = read,
    this.pages = pages,
    this.recommend = recommend
  this.info = function() {
    let newDiv = document.createElement("div");
    bookContainer.append(newDiv);
    newDiv.classList.add('book');
    newDiv.textContent = `${title} by ${author}. ${pages} pages, ${read}`;
  }
  this.info();
}

span.onclick = function() {
  modal.style.display = "none";
}

saveBook.addEventListener('click', saveBookInfo);
addBookButton.addEventListener('click', addBookToLibrary);
