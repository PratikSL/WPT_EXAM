const express = require("express");
let app = express();
app.use(express.json());

const { addMessages, showMessages } = require("./user");

app.get("/show", async (req, res) => {
  const list = await showMessages();
  res.json(list);
});

app.post("/add", async (req, res) => {
  const user = req.body;
  console.log(user);
  await addMessages(user);
  res.json({ Messages: "message updated " });
});

app.listen(4000, () => {
  console.log("Server Started");
});
