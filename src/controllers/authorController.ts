import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Author from "../models/Author";
import Book from "../models/Book";

export const addAuthor = asyncHandler(async (req: Request, res: Response) => {
  const { name } = req.body;

  
  const existingAuthor = await Author.findOne({ name });
  if (existingAuthor) {
    res.status(400);
    throw new Error("Author already exists");
  }

  
  const author = await Author.create({ name });
  res.status(201).json(author);
});


export const getAuthors = asyncHandler(async (req: Request, res: Response) => {
  const authors = await Author.find().populate("books", "title");
  res.status(200).json(authors);
});


export const updateAuthor = asyncHandler(async (req: Request, res: Response) => {
  const { name } = req.body;
  const author = await Author.findById(req.params.id);

  if (!author) {
    res.status(404);
    throw new Error("Author not found");
  }

  if (name) author.name = name;
  const updatedAuthor = await author.save();
  res.status(200).json(updatedAuthor);
});


export const deleteAuthor = asyncHandler(async (req: Request, res: Response) => {
  const author = await Author.findById(req.params.id);

  if (!author) {
    res.status(404);
    throw new Error("Author not found");
  }

  
  const books = await Book.find({ authorId: author._id });
  if (books.length > 0) {
    res.status(400);
    throw new Error("Cannot delete author with associated books");
  }

  await author.deleteOne();
  res.status(200).json({ message: "Author deleted successfully" });
});
