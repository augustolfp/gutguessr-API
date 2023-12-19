export interface RoundInterface {
    lat: number;
    lng: number;
    heading: number;
    pitch: number;
    score: number | null;
    creationTimestamp: number;
}

export interface SinglePlayerSessionInterface {
    username: string;
    numOfRounds: number;
    rounds: RoundInterface[];
}
