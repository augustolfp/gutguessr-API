import { SinglePlayerSessionModelInterface } from "../mongoDB/schemas";
import { RankingDoc } from "../mongoDB/config";

export async function getRanking() {
    const ranking = await RankingDoc.find({});

    return ranking.sort((a, b) => {
        return b.averageScore - a.averageScore;
    });
}

export async function updateRanking(
    session: SinglePlayerSessionModelInterface
) {
    const newRankingItemScores = session.rounds.map((round) => {
        return round.score;
    });

    const newRankingItemAverageScore = Math.floor(
        newRankingItemScores.reduce((acc, cur) => acc + cur, 0) /
            newRankingItemScores.length
    );

    const newItem = await RankingDoc.create({
        username: session.username,
        sessionId: session._id,
        creationTimestamp: session.rounds[0].creationTimestamp,
        scores: newRankingItemScores,
        averageScore: newRankingItemAverageScore,
    });

    const ranking = await RankingDoc.find({});
    ranking.sort((a, b) => {
        return b.averageScore - a.averageScore;
    });

    return newItem;
}
