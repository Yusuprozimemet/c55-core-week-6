// This is the entrypoint for your application.
// node app.js

// TODO: Implement the main application logic here
// 1. Load books on startup
// 2. Display all books
// 3. Show summary statistics
// 4. Add example of filtering by genre or read/unread status
// 5. Add example of marking a book as read

import chalk from 'chalk';
import * as readingListFunctions from './readingList.js';

console.log('📚 MY READING LIST 📚\n');

console.log('All Books:');
readingListFunctions.printAllBooks();

readingListFunctions.printSummary();

console.log(chalk.magenta('\n📖 UNREAD BOOKS EXAMPLE (uses filter()):'));
const unreadBooksArray = readingListFunctions.getUnreadBooks();
console.log('Unread books count:', unreadBooksArray.length);

console.log(chalk.magenta('\n📖 MARKING BOOK AS READ EXAMPLE (uses map()):'));
const duneBookId = 2;  
readingListFunctions.markAsRead(duneBookId);
console.log(chalk.green('✅ Book marked as read!'));

console.log(chalk.green('\n✅ All 5 TODOs demonstrated!'));
