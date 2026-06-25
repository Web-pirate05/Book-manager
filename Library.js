const adder = document.querySelector("#addBook");
const dialog = document.querySelector("#dialog");
const form = document.querySelector("form");

adder.addEventListener("click", (e) =>{
    dialog.showModal();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const Title = document.querySelector("#Title");
    const Author = document.querySelector("#Author");
    const Pages = document.querySelector("#Pages");
    const Read = document.querySelector("#Read");

    addBookToLibrary(Title.value, Author.value, Pages.value, Read.checked);

    dialog.close();

    form.reset();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBooks() {
    const table = document.querySelector("tbody");

    table.innerHTML = "";

    myLibrary.forEach(book => {

        let style = "background: red";

        if(book.read){
            table.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
            </tr>`;
        }

        else{
            table.innerHTML += `
            <tr style="${style}">
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
            </tr>`;
        }
    });
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title,author,pages,read);

    myLibrary.push(book);

    displayBooks();
}