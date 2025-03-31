import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
    _id: mongoose.Types.ObjectId;
  title: string;
  authorId: mongoose.Schema.Types.ObjectId;
  borrowedBy?: mongoose.Schema.Types.ObjectId | null;
  status: "available" | "borrowed";
}

const BookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    borrowedBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
    status: { type: String, enum: ["available", "borrowed"], default: "available" },
  },
  { timestamps: true }
);

export default mongoose.model<IBook>("Book", BookSchema);
