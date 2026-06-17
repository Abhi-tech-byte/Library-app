const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.userId = crypto.randomUUID();
    // this.info=function(){
    //     console.log(`${this.title} by ${this.author}`)
    // };
}

function addBookToLibraray(title, author, pages, read) {

    const newbook = new Book(title, author, pages, read);
    myLibrary.push(newbook);

}

function loopsArray(arr) {

    const container = document.querySelector(".main-content");


    for (let i = 0; i < arr.length; i++) {
        const card = document.createElement("div");
        card.classList.add('cards');
        card.textContent = arr[i].title;
        container.appendChild(card);
    }
}

addBookToLibraray(
    "The Hobbit",
    "J.R.R. Tolkien",
    295,
    false
);

addBookToLibraray(
    "Atomic Habits",
    "James Clear",
    320,
    true
);

const dialog = document.querySelector("#my-dialog");

const showButton = document.querySelectorAll(".add-book-button");

const closeButton = document.querySelector(".dialog-close-btn");

showButton.forEach(button => {
    button.addEventListener("click", () => {
        dialog.showModal();
    })
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

const form = document.querySelector("form");
const container = document.querySelector(".main-content");

form.addEventListener("submit", (e) => {
    e.preventDefault();
   container.innerHTML = ""; 




    const titleinput = document.querySelector("#book_name");
    const pagesinput = document.querySelector("#pages");
    const readcheckbox = document.querySelector("#read");
    const authorinput = document.querySelector("#author_name");

    addBookToLibraray(titleinput.value, authorinput.value, pagesinput.value, readcheckbox.checked);
    loopsArray(myLibrary);
    dialog.close();

})


console.log(myLibrary);








