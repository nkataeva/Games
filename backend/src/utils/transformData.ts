export interface GameFromList {
    id: number;
    title: string;
    author: string;
    genre: string;
    date: string;
    image: string;
}

export const transformData = (gameData: any[]): GameFromList[] => {
    return gameData.map((item: any) => ({
        id: item.id,
        title: item.title,
        author: item.publisher,
        genre: item.genre,
        date: item.release_date,
        image: item.thumbnail
    }));
};