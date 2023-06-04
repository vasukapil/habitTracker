const express = require("express");
const bodyParser = require("body-parser");
const habitRoutes = require("./components/Routers/habitRoutes");
const databaseConnect = require("./database");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes
app.use("/habits", habitRoutes);

app.get("/", (req, res) => {
  const habits = [
    { name: "Reading a book", status: "Done" },
    { name: "Going to the gym", status: "Not done" },
    // Add more habits as needed
  ];

  // Pass the habits data to the 'index' template
  res.render("index", { habits: habits });
});

app.get("/add", (req, res) => {
  res.render("addHabit");
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
