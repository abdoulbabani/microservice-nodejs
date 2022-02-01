const app = require("./app");

//import des routes
const router = require("./routes/userRoute");
app.use("/users", router);
//test api
app.get("/", (req, res) => {
  res.json({ babani: "je suis la " });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("je suis deja pres");
});
