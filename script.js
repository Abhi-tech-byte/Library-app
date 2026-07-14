const myLibrary = [];

// It is a constructor for book object ;

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.userId = crypto.randomUUID();
    
// }

// Book.prototype.toggleRead = function() {
//     this.read = !this.read;
// }

class Book{

    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.userId = crypto.randomUUID();
    }

    toggleRead(){
        this.read=!this.read
    }
}



        



//Function to create book and add to the array

function addBookToLibraray(title, author, pages, read) {

    const newbook = new Book(title, author, pages, read);
    myLibrary.push(newbook);

}

//Function to add the books to library by the user

function loopsArray(arr) {

    const container = document.querySelector(".main-content");

    container.innerHTML = "";

    if (arr.length === 0) {
        container.innerHTML = `
            <div class="pre-main-content">
                <p>Nothing here yet , add books</p>
                <button class="add-book-button">+</button>
            </div>
        `;
        const newButton=container.querySelector(".add-book-button");
        newButton.addEventListener('click',()=>{
            dialog.showModal();
            console.log("click");
        })
        
        return;
    }
    




    for (let i = 0; i < arr.length; i++) {
        const card = document.createElement("div");
        card.classList.add('cards');
        card.dataset.id = arr[i].userId;
        card.innerHTML = `
          <h3>${arr[i].title}</h3>
          <p>Author:${arr[i].author} </p>
          <p>Pages:${arr[i].pages}</p>
          <p>${arr[i].read ? "Read" : "Not Read"}</p>
          <button class="delete-btn">Delete</button>
          <button class="read-btn">
            Toggle Read
          </button>
        `;

        container.appendChild(card);
        const deleteBtn = card.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {

            const index = myLibrary.findIndex(
                book => book.userId === arr[i].userId
            );

            myLibrary.splice(index, 1);

            loopsArray(myLibrary);

        });

        const readBtn = card.querySelector(".read-btn");

        readBtn.addEventListener("click", () => {

        const book = myLibrary.find(
        book => book.userId === arr[i].userId
        );

        book.toggleRead();

        loopsArray(myLibrary);

        });

    }


}

// Sample input data for user

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

loopsArray(myLibrary);

//Functionality for opening and closing of dialogue box

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





    const titleinput = document.querySelector("#book_name");
    const pagesinput = document.querySelector("#pages");
    const readcheckbox = document.querySelector("#read");
    const authorinput = document.querySelector("#author_name");

    addBookToLibraray(titleinput.value, authorinput.value, pagesinput.value, readcheckbox.checked);
    loopsArray(myLibrary);
    dialog.close();

})


console.log(myLibrary);

console.log(myLibrary[0].read);

myLibrary[0].toggleRead();

console.log(myLibrary[0].read);






