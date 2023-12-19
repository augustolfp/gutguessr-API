import * as singlePlayerSessionRepo from "../repositories/singlePlayerSessionRepo";

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

export async function updateLastRoundScore(sessionId: string, score: number) {
    return await singlePlayerSessionRepo.updateLastRoundScore(sessionId, score);
}
