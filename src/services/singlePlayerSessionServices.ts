import * as singlePlayerSessionRepo from "../repositories/singlePlayerSessionRepo";
import * as rankingRepo from "../repositories/rankingRepo";
import calculateScore from "../utils/calculateScore";

export async function createSinglePlayerSession(
    username: string,
    numOfRounds: number
) {
    const newSession = await singlePlayerSessionRepo.createSinglePlayerSession(
        username,
        numOfRounds
    );

    return newSession;
}

export async function createRound(sessionId: string) {
    return await singlePlayerSessionRepo.createRound(sessionId);
}

export async function updateLastRoundScore(
    sessionId: string,
    distance: number
) {
    const score = calculateScore(distance);
    const result = await singlePlayerSessionRepo.updateLastRoundScore(
        sessionId,
        score
    );

    if (result.rounds.length === result.numOfRounds) {
        await rankingRepo.updateRanking(result);
    }

    return result;
}
