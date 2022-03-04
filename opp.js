//book class
const addBook = document.querySelector("#addBook");

class Book {
    constructor(title , author , number) {
        this.title = title;
        this.author = author;
        this.number = number; 
    }
}

class UI {
    static displayBooks() {
        const books = [
            {
                title : "My book",
                author : "Mihai Eminescu", 
                number : '120'
            } , 
            {
                title : "My book",
                author : "Cruceanu Andrei", 
                number : '70'
            }
        ]

      books.forEach((book) => UI.addBookToList(book))

    }
    static addBookToList(book) {
        const list = document.getElementById('allBody');

        const row = document.createElement("tr");
        
 
        row.innerHTML = `<th scope="row" class = "index">1</th>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.number}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete" >x</a></td>
        `
        list.appendChild(row);
    }

    static clearInputs() {
        document.querySelector("#titlu").value = '';
        document.querySelector("#autor").value = '';
        document.querySelector("#numar").value = '';
    }

    static showAlert(message, className) {
         const div = document.createElement('div');
         div.className = `alert alert-${className}`;
         div.appendChild(document.createTextNode(message))
         
         
         const container = document.querySelector('.container');
         const form = document.querySelector("#form")
         
         container.insertBefore(div,form)

         setTimeout( () => {
             document.querySelector(".alert").remove()
         }, 1500);

    }
    
    static deleteElement(el) {
        if(el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();

        }
    }
    static colorElement() {
        document.querySelectorAll('tr').forEach( function (el , i) {
            if(i % 2 == 1 ) {
                el.style.backgroundColor = '#eaeaea';
            } else {
                el.style.background = 'rgb(255, 255, 255)';
            }

            el.firstElementChild.textContent = i ; 
            document.getElementById("indexElement").textContent = "#";
        })
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.addEventListener('DOMContentLoaded' , UI.colorElement);

document.querySelector('#allBody').addEventListener("click" , function (e) {
     
    UI.deleteElement(e.target);
    //UI.showAlert("Ai sters cu succes", "success");
     UI.colorElement();
})


addBook.addEventListener('click', function(e) {
    e.preventDefault();

     const title = document.querySelector("#titlu").value;
     const author = document.querySelector("#autor").value;
     const number = document.querySelector("#numar").value;

     if(title === '' || author === '' || number === '' ) {
          UI.showAlert("Completeaza campurile" , "danger");
     } else {
        const book = new Book(title , author , number)

         UI.addBookToList(book);
         UI.showAlert("Ai adaugat cu succes" , "success");
         UI.clearInputs();
         UI.colorElement();
         
     }


})

