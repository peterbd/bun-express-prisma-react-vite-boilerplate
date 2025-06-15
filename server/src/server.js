import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-undef
  console.log(`Server running at http://localhost:${port}`);
});
