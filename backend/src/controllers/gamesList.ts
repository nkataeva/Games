import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { transformListGames } from '../utils/transformListGames';

const getAllGames = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: AxiosResponse = await axios.get(`https://www.freetogame.com/api/games`);
        const games = result.data;
        const transformedGames = transformListGames(games);
        return res.status(200).json(transformedGames);
    } catch (error) {
        console.error('Error fetching games:', error);
        return res.status(500).json({
            error: 'Failed to fetch games'
        });
    }
};

const getSortFilterGames = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: AxiosResponse = await axios.get(`https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date`);
        const games = result.data;
        const transformedGames = transformListGames(games);
        return res.status(200).json(transformedGames);
    } catch (error) {
        console.error('Error fetching sorted and filtered games:', error);
        return res.status(500).json({
            error: 'Failed to fetch sorted and filtered games'
        });
    }
}

export default { getAllGames, };