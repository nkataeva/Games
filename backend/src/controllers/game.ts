import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { transformGameInfo } from '../utils/transformGameInfo';

const getGame = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result: AxiosResponse = await axios.get(`https://www.freetogame.com/api/game?id=${id}`);
        const game = result.data;
        return res.status(200).json(transformGameInfo(game));
    } catch (error) {
        console.error('Error fetching info of game:', error);
        return res.status(500).json({
            error: 'Failed to fetch info of game'
        });
    }
}

export default getGame;