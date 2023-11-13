const connectDatabase = require("./config/db");
// const userRouter = require("./routes/userRoute");
const app = require("./src/app");
const port = process.env.PORT || 4000;

// user router
// app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  connectDatabase();
});
