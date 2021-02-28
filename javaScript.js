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

function Book(title, author, pages, read, genre, id) {
  this.title = title,
  this.author = author,
  this.read = read,
  this.pages = pages,
  this.genre = genre
  this.id = id;
  this.displayInfo();
}

function addBookToLibrary() {
  let title = document.getElementById("bookTitle").value;
  let author = document.getElementById("bookAuthor").value;
  let read = document.getElementById("read").value;
  let pages = document.getElementById("pages").value;
  let genre = document.getElementById("genre").value;
  let id = myLibrary.length;
  const addBook = new Book(title, author, pages, read, genre, id);
  myLibrary.push(addBook);
  console.log(myLibrary);
  modal.style.display = "none";
  bookTitle.value = '';
  bookAuthor.value = '';
}

Book.prototype.displayInfo = function () {
  let newDiv = document.createElement("div");
  let titleInfo = document.createElement("span");
  let authorInfo = document.createElement("span");
  let pagesInfo = document.createElement("span");
  let genreInfo = document.createElement("span");
  let removeBook = document.createElement("button");
  let readStatus = document.createElement("button");
  bookContainer.append(newDiv);
  newDiv.classList.add('book');
  newDiv.setAttribute("id", `${this.id}`);
 
  newDiv.appendChild(titleInfo).classList.add('bookTitle');
  newDiv.appendChild(authorInfo).classList.add('newBook');
  newDiv.appendChild(pagesInfo).classList.add('newBook');
  newDiv.appendChild(genreInfo).classList.add('newBook');
  newDiv.appendChild(readStatus);
  newDiv.appendChild(removeBook);
  readStatus.setAttribute("class", 'removeButton');
  readStatus.setAttribute("id", 'readStatus');
  removeBook.setAttribute("class", 'removeButton');
  removeBook.setAttribute("id", `${this.id}`);
  
  titleInfo.textContent = `${this.title}`;
  authorInfo.textContent = `Author: ${this.author}`;
  pagesInfo.textContent = `# of Pages: ${this.pages}`;
  genreInfo.textContent = `Book Genre: ${this.genre}`;
  removeBook.textContent = "Remove Book"
  readStatus.textContent = `${this.read}`;

  removeBook.addEventListener('click', () => {
    let removeId = parseInt(removeBook.id);
    myLibrary = myLibrary.filter(books =>  books.id !== removeId);
    console.log(myLibrary);
    let removedElement = document.getElementById(`${this.id}`);
    removedElement.remove();
  })

  readStatus.addEventListener('click', () =>{
    if(this.read === 'Have Not Read'){
      this.read = 'Have Read';
      readStatus.textContent = this.read;
    } else if (this.read === 'Have Read'){
      this.read = 'Have Not Read';
      readStatus.textContent = this.read;
    }
  })
}

span.onclick = function() {
  modal.style.display = "none";
}

saveBook.addEventListener('click', addBookToLibrary);
addBookButton.addEventListener('click', bookInfoCheck);