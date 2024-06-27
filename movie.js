


    class Library {
        constructor() {
            this.collection = {};
        }
    
        // Method to display all the books in the collection

        displayBooks() {
            for (let book in this.collection) {
               const  { title, author, year, availability } = this.collection[book];
                console.log(`Title: ${title}, Author: ${author}, Year: ${year}, Availability: ${availability}`);
            }
        }
    // Method to add a new book to the collection

    addBook(bookId, title, author, year, availability) {
        if (this.collection[bookId]) {
            console.log(`Book with ID ${bookId} already exists.`);
            return;
        }
        this.collection[bookId] = { title, author, year, availability };
        console.log(`Book "${title}"  to the collection.`);
    }
        
    
        // Method to update availability of an existing book in the collection

        updateAvailability(bookId, availability) {
            if (!this.collection[bookId]) {
                console.log(`Book with ID ${bookId} does not exist.`);
                return;
            }
            this.collection[bookId].availability = availability;
            console.log(`Book "${this.collection[bookId].title}" availability updated to ${availability}.`);
        }
    
        // Method to delete a book from the collection
        
        deleteBook(bookId) {
            if (!this.collection[bookId]) {
                console.log(`Book with ID ${bookId} does not exist.`);
                return;
            }
            const bookTitle = this.collection[bookId].title;
            delete this.collection[bookId];
            console.log(`Book "${bookTitle}" removed from the collection.`);
        }
    }
    
   
    const lib = new Library();
    lib.addBook("ikigai", "Ikigai", "Francesc Miralles and Hector Garcia", "2016", true);
    lib.displayBooks( );
    lib.updateAvailability("ikigai", false);
    lib.deleteBook("ikigai");
    lib.displayBooks();
