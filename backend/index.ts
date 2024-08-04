import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: true }));

const port = process.env.PORT || 4001;

app.post("/authenticate", async (req: Request, res: Response) => {
  const { username, secret } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: secret,
        first_name: username,
      },
      { headers: { "private-key": process.env.PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e: any) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running`);
});
