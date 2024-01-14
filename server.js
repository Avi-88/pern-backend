import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import UserRouter from "./routes/user.js";
import PostRouter from "./routes/post.js";
import CompanyRouter from "./routes/company.js";

const app = express();

app.use(bodyParser.json());

// const corsOptions = {
//   origin: process.env.FRONTEND_URL,
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
// };

// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/healthCheck", (req, res) => {
  res.status(200).json("The server is up and running :)");
});
app.use("/api/user", UserRouter);
app.use("/api/post", PostRouter);
app.use("/api/company", CompanyRouter);

app.listen(5000, async () => {});

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", async () => {
  console.log(`server is running on port ${port}`);
});
