import formatDate from "./formatDate";

export interface GameFromList {
    id: number;
    title: string;
    author: string;
    genre: string;
    date: string;
    image: string;
}

export const transformListGames = (gameData: any[]): GameFromList[] => {
    return gameData.map((item: any) => ({
        id: item.id,
        title: item.title,
        author: item.publisher,
        genre: item.genre,
        date: formatDate(item.release_date),
        image: item.thumbnail
    }));
};