//Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

const normalPeople = new Book ('Normal People', 'Sally Rooney', 280, 'Yes')
const theseTruths = new Book ('These Truths', 'Jill LePore', 960, 'Yes')

let myLibrary = []

///////  DOM Selectors ////////
const form = document.querySelector('#form')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author') 
const pagesInput = document.querySelector('#pages')
const readIt = document.querySelector('#readIt')
const bookShelf = document.querySelector('.bookShelf')
const openForm = document.querySelector('#openForm')
const theForm = document.querySelector('.formdiv')
const booksRead = document.querySelector('.booksRead')

document.querySelector('.sendIt').addEventListener('click',addBookToLibrary)
document.querySelector('#openForm').addEventListener('click',openTheForm)
document.querySelector('.close').addEventListener('click',closeTheForm)
document.querySelector('.reset').addEventListener('click',resetForm)


//Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Count number of read books
let bookCount

// bookCounter functions

// ForEACH 
// function bookCounter() {
//     bookCount = 0
//     myLibrary.forEach((book) => {
//         if (book.read == true) {
//             bookCount += 1
//     }
//     booksRead.textContent = `Books read: ${bookCount}`
//     return bookCount
// })}

// FILTER
function bookCounter() {
    bookCount = myLibrary.filter((book)=>book.read).length 
    booksRead.textContent = `Books read: ${bookCount}`
    return bookCount
}


// REDUCE
// function bookCounter() {
//     let booksRead = myLibrary.reduce((count,book)=>{
//         if(book.read){
//         return count++
//         }
//         },0)
//     booksRead.textContent = `Books read: ${bookCount}`
//     return bookCount
// }




//Adds book to the library array
function addBookToLibrary() {
    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    let read  = false

    if (readIt.value == 'yes') {
        read = true
    }

    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)

    console.log(myLibrary)

    addBookToScreen(newBook)
}


//Create a card with book information and add to the DOM
function addBookToScreen(book) {
        //Create card
        const card = document.createElement('div')
        card.className = 'card'

        //Title
        const title = document.createElement('p')
        title.textContent = `"${titleInput.value}"`

        //Author
        const author = document.createElement('p')
        author.textContent = authorInput.value

        //Pages
        const pages = document.createElement('p')
        pages.textContent = `Pages: ${pagesInput.value}`

        //Read status
        const readStatus = document.createElement('p')
        readStatus.textContent = `Read: ${readIt.value}`

        //Remove book button
        const removeButton = document.createElement('icon')
        removeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        removeButton.id = 'removeButton'
        removeButton.addEventListener('click', () => removeBook(card, book))

        //Read status change button
        const readToggle = document.createElement('label')
        readToggle.classList.add('switch')

        const inputPart = document.createElement('input')
        inputPart.type = 'checkbox'
        inputPart.classList.add('checkbox')
        book.read ? inputPart.checked = true : !inputPart.checked

        const span = document.createElement('span')
        span.classList.add('slider', 'round')

        readToggle.append(inputPart)
        readToggle.append(span)

        readToggle.addEventListener('click', function() {
            //inputPart.checked = !inputPart.checked
            book.read = inputPart.checked

        if (book.read) {
            readStatus.textContent = 'Read: yes'
            
        } else {
            readStatus.textContent = 'Read: no'
        }
        bookCounter()
        });

        //Set book counter
        bookCounter()

        //Appending elements to the card & DOM
        card.appendChild(removeButton)
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(readStatus)
        card.appendChild(readToggle)

        bookShelf.append(card)
}



///////  FORM FUNCTIONS ///////
function openTheForm() {
    theForm.style.display = 'block'
}

function closeTheForm() {
    theForm.style.display = 'none'
}

function resetForm() {
    form.reset()
}


/// REMOVE BOOKS FROM DISPLAY
function removeBook(card, book) {
    card.remove()
    myLibrary.splice(myLibrary.indexOf(book), 1)
    bookCounter()
    console.log(myLibrary)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
}





////////  TESTING SECTION ////////////

const testText = document.querySelector('.test')
const testText2 = document.querySelector('.test2')
const testText3 = document.querySelector('.test3')
const testText4 = document.querySelector('.test4')



function test() {
    console.log(title)
    testText.innerText = titleInput.value
    testText2.innerText = authorInput.value
    testText3.innerText = pagesInput.value
    testText4.innerText = readIt.value

}