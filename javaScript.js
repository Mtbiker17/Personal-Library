let addBookButton = document.getElementById('addBookButton');
let modal = document.getElementById("bookModal");
let span = document.getElementsByClassName("close")[0];
let saveBook = document.getElementById('saveBookInfo');
let bookContainer = document.getElementById('book-container');
let myLibrary = [];

function bookInfoCheck() {
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  if (bookTitle === "" || bookAuthor === "") {
    alert("Book Title and Author Required");
    return;
  }
  modal.style.display = "block";
}

function addBookToLibrary() {
  let title = document.getElementById("bookTitle").value;
  let author = document.getElementById("bookAuthor").value;
  let read = document.getElementById("read").value;
  let pages = document.getElementById("pages").value;
  let recommend = document.getElementById("recommend").value;
  let bookNumber = myLibrary.length + 1;
  const addBook = new Book(title, author, pages, read, recommend, bookNumber);
  myLibrary.push(addBook);
  console.log(myLibrary);
  modal.style.display = "none";
}

function Book(title, author, pages, read, recommend, bookNumber) {
    this.title = title,
    this.author = author,
    this.read = read,
    this.pages = pages,
    this.recommend = recommend
    this.bookNumber = bookNumber;
    this.displayInfo();
}

Book.prototype.displayInfo = function () {
      let newDiv = document.createElement("div");
      let titleInfo = document.createElement("span");
      let authorInfo = document.createElement("span");
      let pagesInfo = document.createElement("span");
      let recommendInfo = document.createElement("span");
      let removeBook = document.createElement("button");
      removeBook.setAttribute("id", "removeButton");
      removeBook.dataset.number = this.bookNumber;
  
      bookContainer.append(newDiv);
      newDiv.classList.add('book');
      newDiv.appendChild(titleInfo).classList.add('newBook');
      newDiv.appendChild(authorInfo).classList.add('newBook');
      newDiv.appendChild(pagesInfo).classList.add('newBook');
      newDiv.appendChild(recommendInfo).classList.add('newBook');
      newDiv.appendChild(removeBook).classList.add('removeButton');
      titleInfo.textContent = `Title: ${this.title}`;
      authorInfo.textContent = `Author: ${this.author}`;
      pagesInfo.textContent = `# of Pages: ${this.pages}`;
      recommendInfo.textContent = `Recommend This Book?: ${this.recommend}`;
      removeBook.textContent = "Remove"
  }

//Book.prototype.remove = function (){
  //myLibrary.splice(this.bookNumber)
//}

span.onclick = function() {
  modal.style.display = "none";
}

saveBook.addEventListener('click', addBookToLibrary);
addBookButton.addEventListener('click', bookInfoCheck);
