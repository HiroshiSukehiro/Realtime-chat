import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: true }));

const port = process.env.PORT || 4001;

app.post("/authenticate", async (req: Request, res: Response) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(port, () => {
  console.log(`[server]: Server is running`);
});
