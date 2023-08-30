export interface Game {
    id: number,
    title: string,
    author: string,
    developer: string,
    date: string,
    genre: string,
    image: string
    system_requirements: {
        os: string;
        processor: string;
        memory: string;
        graphics: string;
        storage: string;
    };
    screenshots: {
        id: number;
        image: string;
    }[];
}

export interface GameFromList {
    id: number;
    title: string;
    author: string;
    genre: string;
    date: string;
    image: string;
}

export interface GamesList {
    games: GameFromList [];
}

export interface Options {
    genre: string,
    platform: string,
    sort: string
}