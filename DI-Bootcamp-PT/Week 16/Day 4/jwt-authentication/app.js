const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRouter = require("./auth");
const authenticateJWT = require("./middleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/auth", authRouter);

app.get("/protected", authenticateJWT, (req, res) => {
  res.send("This is a protected route");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
