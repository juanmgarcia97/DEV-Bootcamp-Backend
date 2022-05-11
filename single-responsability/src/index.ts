import { Book } from './book';
import { Invoice } from './invoice';

let book = new Book('test', 'autor', 2001, 100, 'test')

let invoice = new Invoice(book, 21, 500, 1000);

invoice.calculateTotal();
invoice.printInvoice();
invoice.saveToFile();