import express from "express";
import database from "./database";
import cors from "cors";
import mainRouter from "./router";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Asseco Challenge! Backend Built with REST API!");
});

app.listen(5000, () => {
  if (database.getConnection() == null) {
    console.error("WARNING: Database connection failed");
    process.exit(1);
  }
  console.log(
    "SUCCESS: Database Connected; to check the backend info go to http://localhost:5000"
  );
});

app.use("/api", mainRouter);