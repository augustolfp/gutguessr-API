import mongoose from "mongoose";
import dotenv from "dotenv";
import {
    SinglePlayerSessionSchema,
    SinglePlayerSessionModelInterface,
    RankingSchema,
    RankingModelInterface,
} from "./schemas";

dotenv.config();

const MONGO_URL = process.env.MONGO_DB_URL;
console.log(MONGO_URL);
mongoose.connect(MONGO_URL);

export const SinglePlayerSessionDoc =
    mongoose.model<SinglePlayerSessionModelInterface>(
        "SinglePlayerSession",
        SinglePlayerSessionSchema
    );

export const RankingDoc = mongoose.model<RankingModelInterface>(
    "Ranking",
    RankingSchema
);
