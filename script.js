const myLibrary=[];

function Book(title,author,pages,read,userId){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.userId = crypto.randomUUID();
    this.info=function(){
        console.log(`${this.title} by ${this.author}`)
    };
}       

function addBookToLibraray(title,author,pages,read,userId){
    
    const newbook= new Book(title,author,pages,read,userId);
    myLibrary.push(newbook);

}

function loopsArray(arr){
    for(let i=0;i<arr.length;i++){
        const container=document.querySelector(".main-content");
        console.log(container);
        const card=document.createElement("div");
        card.classList.add('.cards');
        card.textContent=arr[i].title;
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

loopsArray(myLibrary);


