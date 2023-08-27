import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { transformListGames } from '../utils/transformListGames';
import pathParamsRequest from '../utils/pathParamsRequest';

const getGamesList = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const options = req.body;
    const pathOptions = pathParamsRequest(options);
    let apiURL = `https://www.freetogame.com/api/games`;
    if (pathOptions) {
        apiURL = `${apiURL}?${pathOptions}`;
    }
    console.log(apiURL);
    try {
        const result: AxiosResponse = await axios.get(apiURL);
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

export default getGamesList;