import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesList } from '../../types/GamesTypes';

const initialState: GamesList  = {
  games: [],
};

const gamesSlice = createSlice({
  name: 'games list',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<GamesList>) => {
      return action.payload;
    },
  },
});

export const { setGames } = gamesSlice.actions;
export default gamesSlice.reducer;