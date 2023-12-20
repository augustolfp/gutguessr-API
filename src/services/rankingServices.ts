import * as rankingRepo from "../repositories/rankingRepo";

export async function getRanking() {
    return await rankingRepo.getRanking();
}
