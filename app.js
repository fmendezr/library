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
        this.books = this.books.filter(book => book.title !== title);
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
    library.addBook(title);
    updateDisplay();
})

// Update display function
const updateDisplay = () => {
    const container = document.getElementById("book-grid");
    while (container.firstChild){
        container.firstChild.remove();  
    };
    library.books.forEach(book => {
        let bookDisplay = document.createElement("div");
        bookDisplay.classList.add("library-display");
        container.appendChild(bookDisplay);
        let titleText = document.createElement("p");
        titleText.classList.add("property");
        titleText.textContent = book.title;
        bookDisplay.appendChild(titleText);
        let authorText = document.createElement("p");
        authorText.classList.add("property");
        authorText.textContent = book.author;
        bookDisplay.appendChild(authorText);
        let pagesText = document.createElement("p");
        pagesText.classList.add("property");
        pagesText.textContent = `${book.pages} Pages`;
        bookDisplay.appendChild(pagesText);
        let readBtn = document.createElement("button");
        readBtn.classList.add("property");
        readBtn.classList.add("chg");
        if (book.read == true){
            readBtn.classList.add("read");
            readBtn.textContent = "Read";
        } else {
            readBtn.classList.add("not-read");
            readBtn.textContent = "Not Read"
        }
        bookDisplay.appendChild(readBtn);
        let rmBtn = document.createElement("button");
        rmBtn.classList.add("property");
        rmBtn.classList.add("rm");
        rmBtn.textContent = "Remove";;
        rmBtn.value = book.title;
        bookDisplay.appendChild(rmBtn);
    });
}

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


// trial button 
const trial = document.getElementById("trial")
trial.addEventListener("click", () => {
})