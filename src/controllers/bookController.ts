import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Book from "../models/Book";
import Author from "../models/Author";


export const addBook = asyncHandler(async (req: Request, res: Response) => {
  const { title, authorId } = req.body;

  const author = await Author.findById(authorId);
  if (!author) {
    res.status(404);
    throw new Error("Author not found");
  }

  const book = await Book.create({ title, authorId });

  author.books?.push(book._id as any);
  await author.save();

  res.status(201).json(book);
});


export const getBooks = asyncHandler(async (req: Request, res: Response) => {
    const { author, borrowed } = req.query;
    let filter: any = {};

    if (author) {
        filter.author = author;
    }

    if (borrowed !== undefined) {
        filter.isBorrowed = borrowed === "true";
    }

    const books = await Book.find(filter).populate("author", "name");
    res.json(books);
});

export const updateBook = asyncHandler(async (req: Request, res: Response) => {
  const { title, authorId } = req.body;
  const book = await Book.findById(req.params.id);

  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  if (title) book.title = title;
  if (authorId) {
    const author = await Author.findById(authorId);
    if (!author) {
      res.status(404);
      throw new Error("Author not found");
    }
    book.authorId = authorId;
  }

  const updatedBook = await book.save();
  res.status(200).json(updatedBook);
});

export const deleteBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  await book.deleteOne();
  res.status(200).json({ message: "Book deleted successfully" });
});
