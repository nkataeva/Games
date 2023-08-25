import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { transformData } from '../utils/transformData';

const getAllGames = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: AxiosResponse = await axios.get(`https://www.freetogame.com/api/games`);
        const games = result.data;
        const transformedGames = transformData(games);
        return res.status(200).json(transformedGames);
    } catch (error) {
        console.error('Error fetching games:', error);
        return res.status(500).json({
            error: 'Failed to fetch games'
        });
    }
};

export default { getAllGames, };