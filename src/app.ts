import express from "express";
import "express-async-errors";
import cors from "cors";

import router from "./routes";

const app = express();
app.use(express.json(), cors());

app.use(router);

export default app;
