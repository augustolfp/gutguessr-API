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
    session.rounds.push({ ...randomSeed, score: null });

    const result = await session.save();
    return result;
}
