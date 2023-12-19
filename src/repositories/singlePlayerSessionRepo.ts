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

    const randomSeed = getRandomSeed();
    session.rounds.push({ ...randomSeed, score: null });

    const result = await session.save();
    return result;
}
