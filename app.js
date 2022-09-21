// classes

class Book {
    constructor(
        title = "unknown",
        author = "unknown",
        pages = "0",
        read = false
    ) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(newBook){
        if(this.books.some(book => book.title == newBook.title) == false)
            this.books.push(newBook);
    }
    removeBook(title){
        this.books.filter(book => book.title != title);
    }
    getBook(title){
        return this.books.find(book.title == title);
    }
}

// Create instance of library 
const library = new Library;

// When submit is clicked take values, create object with set values and add object to library
const submitBook = document.getElementById("submit-book");
submitBook.addEventListener("click", () => {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").checked;
    title = new Book(title, author, pages, read);
    library.addBook(title)
})

// Make pop up form 
const openModalButton = document.getElementById("button");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
        modal.classList.remove("active");
        overlay.classList.remove("active");
        document.getElementById("modal-form").reset();
    }
)

submitBook.addEventListener("click", () => {
        modal.classList.remove("active");
        overlay.classList.remove("active");
        document.getElementById("modal-form").reset();
})

// prevent form from reloading page
const form = document.getElementById("modal-form")
form.addEventListener('submit', (event) => {
    event.preventDefault();
});

// trail btn
const trial = document.getElementById("trial");

trial.addEventListener("click", () => {
    console.log(library)
})