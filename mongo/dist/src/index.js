"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("../db-connection");
const book_data_access_1 = __importDefault(require("./data-access/book-data-access"));
const bookModel_1 = require("./entity/bookModel");
const grid_fs_1 = require("./data-access/grid-fs");
class Test {
    configureDb() {
        return __awaiter(this, void 0, void 0, function* () {
            let dbConnection = new db_connection_1.DbConnection();
            yield dbConnection.connect();
            //TEST
            let bookDatAccess = new book_data_access_1.default();
            let book = new bookModel_1.Book();
            book.author = 'test';
            book.date = new Date();
            book.title = 'design patterns';
            let createdBook = yield bookDatAccess.save(book);
            // console.log(createdBook);
            let readedBook = yield bookDatAccess.read(createdBook.id);
            if (readedBook != null) {
                readedBook.title = 'UPDATED';
                yield bookDatAccess.update(readedBook._id, readedBook);
                yield bookDatAccess.remove(readedBook._id);
                const gridFS = new grid_fs_1.GridFS();
                //await gridFS.upload('helloWorld.txt');
                //await gridFS.upload('mongodb-windows-x86_64-5.0.8-signed.msi');
                yield gridFS.download('mongodb-windows-x86_64-5.0.8-signed.msi');
            }
            //optional
            //await dbConnection.disconnect();
        });
    }
}
new Test().configureDb();
//# sourceMappingURL=index.js.map