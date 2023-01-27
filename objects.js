//Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

const normalPeople = new Book ('Normal People', 'Sally Rooney', 280, 'Yes')
const theseTruths = new Book ('These Truths', 'Jill LePore', 960, 'Yes')

let myLibrary = []


///////  DOM Selectors ////////
document.querySelector('.sendIt').addEventListener('click',addBookToLibrary)
const form = document.querySelector('#form')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author') 
const pagesInput = document.querySelector('#pages')
const readIt = document.querySelector('#readIt')
const bookShelf = document.querySelector('.bookShelf')
const openForm = document.querySelector('#openForm')
const theForm = document.querySelector('.formdiv')

document.querySelector('#openForm').addEventListener('click',openTheForm)
document.querySelector('.close').addEventListener('click',closeTheForm)
document.querySelector('.reset').addEventListener('click',resetForm)


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    let read  = readIt.value

    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)

    console.log(myLibrary)

    addBookToScreen(newBook)
}



function addBookToScreen(book) {
        const card = document.createElement('div')
        card.className = 'card'
    
        const title = document.createElement('p')
        title.textContent = `"${titleInput.value}"`

        const author = document.createElement('p')
        author.textContent = authorInput.value

        const pages = document.createElement('p')
        pages.textContent = `Pages: ${pagesInput.value}`

        const read = document.createElement('p')
        read.textContent = `Read: ${readIt.value}`

        const removeButton = document.createElement('button')
        removeButton.textContent = `Delete`
        removeButton.id = 'removeButton'

        removeButton.addEventListener('click', () => removeBook(card, book))
    
        card.appendChild(removeButton)
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)

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

function removeBook(card, book) {
    card.remove()
    myLibrary.splice(myLibrary.indexOf(book), 1)
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