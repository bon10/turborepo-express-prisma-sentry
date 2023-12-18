import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express on Vercel");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});

export default app;
