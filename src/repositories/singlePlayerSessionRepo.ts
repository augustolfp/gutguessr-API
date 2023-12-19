import { ApiError } from "../helpers/api-errors";
import { SinglePlayerSessionDoc } from "../mongoDB/config";
import getRandomSeed from "../utils/getRandomSeed";

export async function createSinglePlayerSession(
    username: string,
    numOfRounds: number
) {
    const session = await SinglePlayerSessionDoc.create({
        username,
        numOfRounds,
    });

    return session;
}

export async function createRound(sessionId: string) {
    const session = await SinglePlayerSessionDoc.findById(sessionId);

    if (!session) {
        throw new ApiError("Session does not exist", 400);
    }

    if (session.rounds.length !== 0) {
        const lastRound = session.rounds[session.rounds.length - 1];
        if (lastRound.score === null) {
            throw new ApiError("Last round score is null", 403);
        }
    }

    if (session.rounds.length === session.numOfRounds) {
        throw new ApiError("Game already finished", 403);
    }

    const randomSeed = getRandomSeed();
    session.rounds.push({
        ...randomSeed,
        score: null,
        isScoreSubmitLate: false,
        creationTimestamp: Date.now(),
    });

    const result = await session.save();
    return result;
}

export async function updateLastRoundScore(sessionId: string, score: number) {
    const timeToRespond = 90 * 1000; // 90 milisseconds

    const session = await SinglePlayerSessionDoc.findById(sessionId);

    if (!session) {
        throw new ApiError("Session does not exist", 400);
    }

    if (session.rounds.length === 0) {
        throw new ApiError("There is no round in the session", 403);
    }

    const lastRound = session.rounds[session.rounds.length - 1];
    if (lastRound.score !== null) {
        throw new ApiError("Score was already submitted", 403);
    }

    const isLate: boolean =
        Date.now() - lastRound.creationTimestamp > timeToRespond;
    const finalScore = isLate ? 0 : score;

    lastRound.score = finalScore;
    lastRound.isScoreSubmitLate = isLate;

    return await session.save();
}
