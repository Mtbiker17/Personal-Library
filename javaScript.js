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
  const addBook = new Book(title, author, pages, read, recommend);
  myLibrary.push(addBook);
  console.log(myLibrary);
}

function Book(title, author, pages, read, recommend) {
  this.title = title,
    this.author = author,
    this.read = read,
    this.pages = pages,
    this.recommend = recommend
  this.displayInfo = function() {
    let newDiv = document.createElement("div");
    let titleInfo = document.createElement("span");
    let authorInfo = document.createElement("span");
    let pagesInfo = document.createElement("span");
    let recommendInfo = document.createElement("span");

    bookContainer.append(newDiv);
    newDiv.classList.add('book');
    newDiv.appendChild(titleInfo).classList.add('newBook');
    newDiv.appendChild(authorInfo).classList.add('newBook');
    newDiv.appendChild(pagesInfo).classList.add('newBook');
    newDiv.appendChild(recommendInfo).classList.add('newBook');
    titleInfo.textContent = `Title: ${title}`;
    authorInfo.textContent = `Author: ${author}`;
    pagesInfo.textContent = `# of Pages: ${pages}`;
    recommendInfo.textContent = `Recommend This Book?: ${recommend}`;
  }
  this.displayInfo();
}

span.onclick = function() {
  modal.style.display = "none";
}

saveBook.addEventListener('click', saveBookInfo);
addBookButton.addEventListener('click', addBookToLibrary);
