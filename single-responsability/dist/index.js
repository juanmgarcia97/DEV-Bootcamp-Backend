"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const invoice_1 = require("./invoice");
let book = new book_1.Book('test', 'autor', 2001, 100, 'test');
let invoice = new invoice_1.Invoice(book, 21, 500, 1000);
invoice.calculateTotal();
invoice.printInvoice();
invoice.saveToFile();
//# sourceMappingURL=index.js.map