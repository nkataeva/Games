import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesList, GameFromList } from '../../types/GamesTypes';

const initialState: GamesList  = {
  games: [],
};

const gamesSlice = createSlice({
  name: 'games list',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<GameFromList[]>) => {
      state.games = action.payload;
    },
  },
});

export const { setGames } = gamesSlice.actions;
export default gamesSlice.reducer;