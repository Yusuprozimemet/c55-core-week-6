// Place here the file operation functions for loading and saving books
import fs from 'fs';
import chalk from 'chalk';

const BOOKS_FILE = 'books.json';

export function loadBooks() {
  try {
    // Check if file exists first
    if (!fs.existsSync(BOOKS_FILE)) {
      console.log('No books.json found, starting empty');
      return [];
    }
    
    // Read and parse the file
    const data = fs.readFileSync(BOOKS_FILE, 'utf8');
    const books = JSON.parse(data);
    
    // Make sure it's an array
    if (Array.isArray(books)) {
      return books;
    } else {
      console.log('books.json is not valid, starting empty');
      return [];
    }
  } catch (error) {
    console.log('Error loading books:', error.message);
    return [];
  }
}

export function saveBooks(books) {
  try {
    fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2));
  } catch (error) {
    console.log('Error saving books:', error.message);
  }
}

export function addBook(bookInfo) {
  const books = loadBooks();
  const newId = books.length + 1;
  const newBook = {
    id: newId,
    title: bookInfo.title,
    author: bookInfo.author,
    genre: bookInfo.genre,
    read: false
  };
  books.push(newBook);
  saveBooks(books);
  return newBook;
}

export function getUnreadBooks() {
  // TODO: Use filter()
  const books = loadBooks();
  return books.filter(book => !book.read);
}

export function getBooksByGenre(genre) {
  // TODO: Use filter()
  const books = loadBooks();
  return books.filter(book => book.genre === genre);
}

export function markAsRead(id) {
  // TODO: Use map()
  const books = loadBooks();
  const newBooks = books.map(book => {
    if (book.id === id) {
      return { ...book, read: true };
    }
    return book;
  });
  saveBooks(newBooks);
  return newBooks;
}

export function getTotalBooks() {
  // TODO: Use length
  return loadBooks().length;
}

export function hasUnreadBooks() {
  // TODO: Use some()
  return loadBooks().some(book => !book.read);
}

export function printAllBooks() {
  // Loop with chalk colors
  const books = loadBooks();
  books.forEach(book => {
    const symbol = book.read ? chalk.green('✓') : chalk.yellow('⚠');
    const titleColor = chalk.cyan(book.title);
    const status = book.read ? chalk.green('Read') : chalk.yellow('Unread');
    
    console.log(`${book.id}. ${titleColor} by ${book.author} (${book.genre}) ${symbol} ${status}`);
  });
}

export function printSummary() {
  const books = loadBooks();
  const readCount = books.filter(book => book.read).length;
  const unreadCount = books.length - readCount;
  
  console.log(chalk.bold('\n📊 SUMMARY'));
  console.log(chalk.bold(`Total: ${books.length}`));
  console.log(chalk.green.bold(`Read: ${readCount}`));
  console.log(chalk.yellow.bold(`Unread: ${unreadCount}`));
}
