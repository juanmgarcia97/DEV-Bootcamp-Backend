import mongoose, { Document, Types } from 'mongoose';
const Schema = mongoose.Schema;

interface Book extends Document {
  _id: Types.ObjectId;
  author: string;
  title: string;
  date?: Date;
}
const bookSchema = new Schema<Book>({
  author: {
    type: String,
  },
  title: {
    type: String,
    default: 'No title',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Book>('Book', bookSchema);
