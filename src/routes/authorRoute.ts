import express from "express";
import { addAuthor, getAuthors, updateAuthor, deleteAuthor } from "../controllers/authorController";

const router = express.Router();

router.post("/", addAuthor);    
router.get("/", getAuthors);     
router.put("/:id", updateAuthor); 
router.delete("/:id", deleteAuthor); 

export default router;
