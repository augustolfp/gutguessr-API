import { SinglePlayerSessionDoc } from "../mongoDB/config";
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
