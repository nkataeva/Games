import styles from './GamePage.module.scss';
import Stepper from '../../components/Stepper/Stepper';
import GameInfo from '../../components/GameInfo/GameInfo';
import SystemReq from '../../components/GameInfo/SystemReq';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentGameInfo } from '../../data/api';
import { clearCurrentGame, setCurrentGame } from '../../store/features/currentGameSlice';
import { RootState } from '../../store/store';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { APPRoute } from '../../paths';

const GamePage = () => {
    const dispatch = useDispatch();
    const gameInfo = useSelector((state: RootState) => state.currentGame.game);

    const id = useParams()?.id || "";

    React.useEffect(() => {
        const fetchGames = async () => {
            try {
                const gamesData = await getCurrentGameInfo(Number(id)); // Получаем данные с сервера
                dispatch(setCurrentGame(gamesData)); // Заносим данные в хранилище
                console.log(gameInfo)
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, [dispatch]);

    const navigate = useNavigate()
    const handleLeave = () => {
        clearCurrentGame();
        navigate(`${APPRoute.MAIN}`);
    }

    return (
        <>
            {gameInfo ? (<div id={styles.content}>
                <div id={styles.main}>
                    <img src={gameInfo?.image} alt='Game Image' className={styles.poster} />
                    <GameInfo
                        title={gameInfo?.title}
                        author={gameInfo?.author}
                        developer={gameInfo?.developer}
                        date={gameInfo?.date}
                        genre={gameInfo?.genre} />
                </div>
                <SystemReq req={gameInfo?.system_requirements} />
                <Stepper images={gameInfo.screenshots} />
                <Button
                    variant="outlined"
                    onClick={handleLeave}
                    id={styles.btn}>
                    Перейти на главную страницу
                </Button>
            </div>) : <CircularProgress id={styles.content} />}
        </>
    )
}

export default GamePage;