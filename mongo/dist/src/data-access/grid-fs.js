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
exports.GridFS = void 0;
const fs_1 = __importDefault(require("fs"));
const mongoose_1 = __importDefault(require("mongoose"));
class GridFS {
    constructor() {
        this.bucket = new mongoose_1.default.mongo.GridFSBucket(mongoose_1.default.connection.db);
    }
    upload(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs_1.default.createReadStream(`./${fileName}`)
                .pipe(this.bucket.openUploadStream(fileName))
                .on('finish', () => {
                mongoose_1.default.connection.close();
            });
        });
    }
    download(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.bucket.openDownloadStreamByName(fileName)
                .pipe(fs_1.default.createWriteStream(`./${fileName}`))
                .on('finish', () => {
                mongoose_1.default.connection.close();
            });
        });
    }
}
exports.GridFS = GridFS;
//# sourceMappingURL=grid-fs.js.map