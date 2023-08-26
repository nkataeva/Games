import formatDate from "./formatDate";

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

export const transformGameInfo = (game: any): Game => {
    return ({
        id: game.id,
        title: game.title,
        author: game.publisher,
        developer: game.developer,
        date: formatDate(game.release_date),
        genre: game.genre,
        image: game.thumbnail,
        system_requirements: game.minimum_system_requirements ?? {},
        screenshots: game.screenshots,
    })
}