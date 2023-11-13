const express = require("express");
const cors = require("cors");
const userRouter = require("../routes/userRoute");
const User = require("../models/data.model");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // user router
// app.use("/api/users", userRouter);

// ==================== mongodb connecteion start

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER1}:${process.env.DB_PASS1}@cluster0.5julrfk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const reviewCollection = client.db("BistroDBP1").collection("reviews");

    // For All users
    app.get("/reviews", async (req, res) => {
      try {
        const result = await reviewCollection.find().toArray();
        res.status(200).json({
          success: true,
          message: "All users is here..",
          users: result,
        });
      } catch (error) {
        console.log(error.message);
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// ==================== mongodb connecteion end

// For All users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "All users is here..",
      users: users,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to vercel server.",
  });
});

// all product
app.get("/products", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Product is here",
  });
});

module.exports = app;
