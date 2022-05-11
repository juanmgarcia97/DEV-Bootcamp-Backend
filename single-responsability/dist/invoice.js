"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const formatter_1 = __importDefault(require("./formatter"));
const printer_1 = __importDefault(require("./printer"));
class Invoice {
    constructor(book, quantity, tax, total) {
        this.book = book;
        this.quantity = quantity;
        this.tax = tax;
        this.total = total;
        this.formatter = new formatter_1.default();
        this.printer = new printer_1.default();
    }
    calculateTotal() {
        return this.total + this.tax;
    }
    printInvoice() {
        this.printer.printInvoice();
    }
    saveToFile() {
        this.formatter.saveToFile();
    }
}
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.js.map