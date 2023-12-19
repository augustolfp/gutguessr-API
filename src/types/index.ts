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
