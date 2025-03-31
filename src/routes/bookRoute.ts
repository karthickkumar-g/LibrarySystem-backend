import express from "express";
import { addBook, getBooks, updateBook, deleteBook } from "../controllers/bookController";

const router = express.Router();

router.post("/", addBook);    
router.get("/", getBooks);     
router.put("/:id", updateBook);
router.delete("/:id", deleteBook); 

export default router;
