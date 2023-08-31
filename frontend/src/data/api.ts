import axios from 'axios';
import { Options } from '../types/GamesTypes';
import { setGames } from '../store/features/gameListSlice';
import { setCurrentGame } from '../store/features/currentGameSlice';
import { Dispatch } from '@reduxjs/toolkit';


const API_BASE_URL = 'http://localhost:3000';

export const getGames = async (options: Options | null, dispatch: Dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/games`, options);
    const gamesData = response.data;
    dispatch(setGames(gamesData));
    return gamesData;
  } catch (error) {
    throw error;
  }
};

export const getCurrentGameInfo = async (gameId: number, dispatch: Dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/games/${gameId}`);
    const gameData = response.data;
    dispatch(setCurrentGame(gameData));
    return gameData;
  } catch (error) {
    throw error;
  }
};

