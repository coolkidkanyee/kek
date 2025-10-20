import express from "express";
const app = express();
app.use(express.static(".")); // serve all files from root
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port", process.env.PORT || 3000);
});
