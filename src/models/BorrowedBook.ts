import mongoose, { Schema, Document } from "mongoose";

interface IBorrowedBook extends Document {
  user: mongoose.Types.ObjectId;
  book: mongoose.Types.ObjectId;
  borrowedDate: Date;
  returnedDate?: Date;
}

const BorrowedBookSchema = new Schema<IBorrowedBook>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  borrowedDate: { type: Date, default: Date.now },
  returnedDate: { type: Date }
});

const BorrowedBook = mongoose.model<IBorrowedBook>("BorrowedBook", BorrowedBookSchema);
export default BorrowedBook;
