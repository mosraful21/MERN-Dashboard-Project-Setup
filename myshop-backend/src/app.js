const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/dbConnect");

const customerRoutes = require("./routes/customerRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// api : --------------------
app.use("/api/customer", customerRoutes);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
