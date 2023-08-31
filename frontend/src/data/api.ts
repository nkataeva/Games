import axios from 'axios';
import { Options } from '../types/GamesTypes';
import { setGames } from '../store/features/gameListSlice';
import { setCurrentGame } from '../store/features/currentGameSlice';


const API_BASE_URL = 'http://localhost:3000';

export const getGames = async (options: Options | null) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/games`, { options });
    const gamesData = response.data; // Предположим, что получили данные
    setGames(gamesData); // Заносим данные в хранилище
    return gamesData; // Возвращаем данные, если это нужно
  } catch (error) {
    throw error;
  }
};

export const getCurrentGameInfo = async (gameId: number) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/games/${gameId}`);
      const gameData = response.data; // Предположим, что получили данные об игре
      setCurrentGame(gameData); // Заносим данные об игре в хранилище
      return gameData; // Возвращаем данные, если это нужно
    } catch (error) {
      throw error;
    }
  };
