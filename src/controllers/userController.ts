import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/User";


export const addUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email } = req.body;

  
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  
  const user = await User.create({ name, email });
  res.status(201).json(user);
});


export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json(users);
});
