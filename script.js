let bookTitle = 'Hábitos Atômicos'
let bookAuthor = 'James Clear'
let bookPages = 306


const book = {
    bookTitle: 'Hábitos Atômicos',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1:'Fundamentals',
        chap2:'1st law'
    },
    printBook: function() {
        console.log('printing...')
    }
}
book.printBook()