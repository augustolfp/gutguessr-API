import defaultMap from "../assets/maps/defaultMap.json";

const getRandomItemFromArray = <T>(arr: T[]): T => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
};

export default function getRandomSeed() {
    const { lat, lng, heading, pitch } = getRandomItemFromArray(defaultMap);

    return { lat, lng, heading, pitch };
}
