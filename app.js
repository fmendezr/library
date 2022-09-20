let myLibrary = [];

// Book object creater function
const Book = (title, author, numPages, read) => {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read
}

// Add book to library 
const addBookToLibrary = () => {
}

// make submit button add book 
const addBookBtn = 


// Make button to pop up form 
const openModalButton = document.getElementById("button");
const overlay = document.getElementById("overlay")

openModalButton.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
        modal.classList.remove("active")
        overlay.classList.remove("active")
    }
)


