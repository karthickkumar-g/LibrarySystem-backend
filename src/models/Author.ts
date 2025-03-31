import mongoose, { Schema, Document } from "mongoose";

export interface IAuthor extends Document {
  name: string;
  books: mongoose.Types.ObjectId[];
}

const AuthorSchema = new Schema<IAuthor>(
  {
    name: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);

export default mongoose.model<IAuthor>("Author", AuthorSchema);
