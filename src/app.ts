import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoute";
import authorRoutes from "./routes/authorRoute";
import userRoute from "./routes/userRoute"
import borrowedBookRoute from "./routes/borrowedBookRoute";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/users", userRoute);
app.use("/borrowed-books", borrowedBookRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
