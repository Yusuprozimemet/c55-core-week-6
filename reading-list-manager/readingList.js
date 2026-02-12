// Place here the file operation functions for loading and saving books

function loadBooks() {
  // TODO: Implement this function
  // Read from books.json
  // Handle missing file (create empty array)
  // Handle invalid JSON (notify user, use empty array)
  // Use try-catch for error handling
}

function saveBooks(books) {
  // TODO: Implement this function
  // Write books array to books.json
  // Use try-catch for error handling
}

function addBook(book) {
  // TODO: Implement this function
}

function getUnreadBooks() {
  // TODO: Implement this function using filter()
}

function getBooksByGenre(genre) {
  // TODO: Implement this function using filter()
}

function markAsRead(id) {
  // TODO: Implement this function using map()
}

function getTotalBooks() {
  // TODO: Implement this function using length
}

function hasUnreadBooks() {
  // TODO: Implement this function using some()
}

function printAllBooks() {
  // TODO: Implement this function
  // Loop through and display with chalk
  // Use green for read books, yellow for unread
  // Use cyan for titles
}

function printSummary() {
  // TODO: Implement this function
  // Show statistics with chalk
  // Display total books, read count, unread count
  // Use bold for stats
}