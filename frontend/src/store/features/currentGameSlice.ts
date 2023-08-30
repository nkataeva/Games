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
  },
});

export const { setCurrentGame } = currentGameSlice.actions;

export default currentGameSlice.reducer;
