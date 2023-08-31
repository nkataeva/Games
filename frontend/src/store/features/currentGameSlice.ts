import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../types/GamesTypes';

interface CurrentGameState {
  game: Game | null;
}

const initialState: CurrentGameState = {
  game: null,
};

const currentGameSlice = createSlice({
  name: 'gameDetails',
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<Game>) => {
      state.game = action.payload;
    },
    clearCurrentGame: (state) => {
      state.game = initialState.game;
    }
  },
});

export const { setCurrentGame, clearCurrentGame } = currentGameSlice.actions;

export default currentGameSlice.reducer;
