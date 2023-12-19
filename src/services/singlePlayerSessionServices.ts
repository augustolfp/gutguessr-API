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
