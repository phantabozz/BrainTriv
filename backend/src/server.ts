import express, { type Express, type Request, type Response } from "express"
import cors from "cors"


const PORT = process.env.PORT || 3000;
const app: Express = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());



app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});


app.post("/login", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  return res.json({message: "login response sent back!"});
});

app.post("/register", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  return res.json({message: "register response sent back!"});
});


app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});