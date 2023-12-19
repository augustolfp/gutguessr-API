export interface RoundInterface {
    lat: number;
    lng: number;
    heading: number;
    pitch: number;
    score: number | null;
    sessionId: string;
}

export interface SinglePlayerSessionInterface {
    username: string;
    numOfRounds: number;
    rounds: RoundInterface[];
}
