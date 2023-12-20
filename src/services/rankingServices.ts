import * as rankingRepo from "../repositories/rankingRepo";

export async function getRanking(sessionId: string) {
    return await rankingRepo.getRanking(sessionId);
}
