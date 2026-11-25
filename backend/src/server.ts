import express, { type Express, type Request, type Response } from "express"
import cors from "cors"
import { authRouter } from "@/routes/authRoutes"


const PORT = process.env.PORT || 3000;
const app: Express = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);



app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});




app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});