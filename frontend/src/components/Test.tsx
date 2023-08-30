import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../data/api';
import { setGames } from '../store/features/gameListSlice';
import { RootState } from '../store/store';
import { GameFromList } from '../types/GamesTypes';

const GamesComponent = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.games.games);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames(null); // Получаем данные с сервера
        dispatch(setGames(gamesData)); // Заносим данные в хранилище
        console.log(games)
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, [dispatch]);

  

  return (
    <div>
      {/* Отображаем список игр */}
      {games?.map((game: GameFromList) => (
        <div key={game.id}>{game.title}</div>
      ))}
    </div>
  );
};
 
export default GamesComponent;
