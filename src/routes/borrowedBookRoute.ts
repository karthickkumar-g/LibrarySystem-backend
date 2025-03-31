import express from "express";
import { borrowBook, returnBook, getUserBorrowedBooks } from "../controllers/borrowedBookController";

const router = express.Router();

router.post("/", borrowBook);
router.put("/:id/return", returnBook); 
router.get("/user/:userId", getUserBorrowedBooks);

export default router;
