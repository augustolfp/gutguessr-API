export interface RoundInterface {
    lat: number;
    lng: number;
    heading: number;
    pitch: number;
    score: number | null;
    isScoreSubmitLate: boolean;
    creationTimestamp: number;
}

export interface SinglePlayerSessionInterface {
    username: string;
    numOfRounds: number;
    rounds: RoundInterface[];
}

export interface RankingInterface {
    username: string;
    sessionId: string;
    creationTimestamp: number;
    scores: number[];
    averageScore: number;
}
