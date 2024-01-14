import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import UserRouter from "./routes/user.js";
import PostRouter from "./routes/post.js";
import CompanyRouter from "./routes/company.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/healthCheck" , (req, res) => {
  res.status(200).json("The server is up and running :)");
})
app.use("/api/user", UserRouter);
app.use("/api/post", PostRouter);
app.use("/api/company", CompanyRouter);

app.listen(5000, async () => {
  console.log("server is running on port 5000");
});
