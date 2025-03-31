import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import BorrowedBook from "../models/BorrowedBook";
import Book from "../models/Book";


export const borrowBook = asyncHandler(async (req: Request, res: Response) => {
  const { userId, bookId } = req.body;

  const alreadyBorrowed = await BorrowedBook.findOne({ book: bookId, returnedDate: null });

  if (alreadyBorrowed) {
    res.status(400);
    throw new Error("Book is already borrowed");
  }

  const borrowedBook = await BorrowedBook.create({
    user: userId,
    book: bookId
  });

  res.status(201).json(borrowedBook);
});

export const returnBook = asyncHandler(async (req: Request, res: Response) => {
  const borrowedBook = await BorrowedBook.findById(req.params.id);

  if (!borrowedBook || borrowedBook.returnedDate) {
    res.status(400);
    throw new Error("Book is not borrowed or already returned");
  }

  borrowedBook.returnedDate = new Date();
  await borrowedBook.save();

  res.status(200).json({ message: "Book returned successfully" });
});

export const getUserBorrowedBooks = asyncHandler(async (req: Request, res: Response) => {
  const borrowedBooks = await BorrowedBook.find({ user: req.params.userId }).populate("book", "title");

  res.status(200).json(borrowedBooks);
});
