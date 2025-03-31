import Joi from "joi";


export const bookSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    author: Joi.string().hex().length(24).required(), 
    publishedYear: Joi.number().integer().min(1000).max(new Date().getFullYear()),
    genre: Joi.string().min(3).max(50).required(),
});


export const authorSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    bio: Joi.string().optional(),
});


export const userSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
});


export const borrowBookSchema = Joi.object({
    userId: Joi.string().hex().length(24).required(), 
    bookId: Joi.string().hex().length(24).required(),
});
