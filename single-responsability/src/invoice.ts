import { Book } from "./book";
import Formatter from "./formatter";
import Printer from './printer';

export class Invoice {
    private formatter!: Formatter;
    private printer!: Printer;

    constructor(
        public book: Book,
        public quantity: number,
        public tax: number,
        public total: number) {
            this.formatter = new Formatter()
            this.printer = new Printer()
    }

    calculateTotal() {
        return this.total + this.tax;
    }

    printInvoice() {
        this.printer.printInvoice()
    }

    saveToFile() {
        this.formatter.saveToFile()
    }
}