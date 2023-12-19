import "express-async-errors";
import express from "express";

import cors from "cors";

import router from "./routes";
import errorHandlerMW from "./middlewares/errorHandlerMW";

const app = express();
app.use(express.json(), cors());

app.use(router);
app.use(errorHandlerMW);

export default app;
