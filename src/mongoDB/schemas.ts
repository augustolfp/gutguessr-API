import {
    SinglePlayerSessionInterface,
    RoundInterface,
    RankingInterface,
} from "../types";
import { Document, Schema } from "mongoose";

export interface SinglePlayerSessionModelInterface
    extends SinglePlayerSessionInterface,
        Document {}

export interface RoundModelInterface extends RoundInterface, Document {}

export interface RankingModelInterface extends RankingInterface, Document {}

const RoundSchema: Schema = new Schema(
    {
        lat: Number,
        lng: Number,
        heading: Number,
        pitch: Number,
        score: { type: Number, default: null },
        isScoreSubmitLate: { type: Boolean, default: false },
        creationTimestamp: Number,
    },
    { timestamps: false, versionKey: false }
);

export const SinglePlayerSessionSchema: Schema = new Schema(
    {
        username: String,
        numOfRounds: Number,
        rounds: [RoundSchema],
    },
    { versionKey: false }
);

export const RankingSchema: Schema = new Schema(
    {
        username: String,
        sessionId: String,
        creationTimestamp: Number,
        scores: [Number],
        averageScore: Number,
    },
    {
        versionKey: false,
    }
);
