import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentGameInfo } from '../../data/api';
import { setCurrentGame } from '../../store/features/currentGameSlice';
import { RootState } from '../../store/store';
import { Button } from '@mui/material';
import { APPRoute } from '../../paths';
import Error from '../../components/Error/Error';
import styles from './GamePage.module.scss';
import Stepper from '../../components/Stepper/Stepper';
import GameInfo from '../../components/GameInfo/GameInfo';
import SystemReq from '../../components/GameInfo/SystemReq';
import { useNavigate, useParams } from 'react-router-dom';

const GamePage = () => {
    const dispatch = useDispatch();
    const id = useParams()?.id || "";

    const gameInfo = useSelector((state: RootState) => state.currentGame.game);
    const [error, setError] = React.useState(false);

    const generateGameCardKey = (id: string) => {
        return `gameCard_${ id }`;
    };

    const GAME_CARD_KEY = generateGameCardKey(id);

    const GAME_EXPIRATION_KEY = 'gameCardExpiration';

    const isExpired = (expirationTime: number) => {
        if (!expirationTime) {
            return true;
        }
        return Date.now() > expirationTime;
    };

    const setGameCardExpiration = (expirationTime: number) => {
        localStorage.setItem(GAME_EXPIRATION_KEY, expirationTime.toString());
    };

    const clearGameCardExpiration = () => {
        localStorage.removeItem(GAME_EXPIRATION_KEY);
    };

    React.useEffect(() => {
        const fetchGames = async () => {
            try {
                const storedData = localStorage.getItem(GAME_CARD_KEY);
                const expirationTime = localStorage.getItem(GAME_EXPIRATION_KEY);

                if (storedData && expirationTime && !isExpired(Number(expirationTime))) {
                    const parsedData = JSON.parse(storedData);
                    dispatch(setCurrentGame(parsedData));
                    setError(false);
                    return;
                }

                const gamesData = await getCurrentGameInfo(Number(id), dispatch);
                const newExpirationTime = Date.now() + 5 * 60 * 1000;
                const gameDataWithExpiration = { ...gamesData, expirationTime: newExpirationTime };
                localStorage.setItem(GAME_CARD_KEY, JSON.stringify(gameDataWithExpiration));
                setGameCardExpiration(newExpirationTime);
                setError(false);
            } catch (error) {
                console.error('Error fetching games:', error);
                setError(true);
            }
        };

        fetchGames();
    }, []);

    React.useEffect(() => {
        const expirationTimer = setInterval(() => {
            const expirationTime = localStorage.getItem(GAME_EXPIRATION_KEY);
            if (expirationTime && isExpired(Number(expirationTime))) {
                localStorage.removeItem(GAME_CARD_KEY);
                clearGameCardExpiration();
            }
        }, 1000);

        return () => {
            clearInterval(expirationTimer);
        };
    }, []);

    const navigate = useNavigate();
    const handleLeave = () => {
        navigate(APPRoute.MAIN);
    };

    return (
        <>
            {!error ? (
                gameInfo ? (
                    <div id={styles.content}>
                        <div id={styles.main}>
                            <img src={gameInfo?.image} alt='Game Image' className={styles.poster} />
                            <GameInfo
                                title={gameInfo?.title}
                                author={gameInfo?.author}
                                developer={gameInfo?.developer}
                                date={gameInfo?.date}
                                genre={gameInfo?.genre}
                            />
                        </div>
                        <SystemReq req={gameInfo?.system_requirements} />
                        <Stepper images={gameInfo.screenshots} />
                        <Button variant='outlined' onClick={handleLeave} id={styles.btn}>
                            Перейти на главную страницу
                        </Button>
                    </div>
                ) : (
                    <div id={styles.load}>
                        <CircularProgress />
                    </div>
                )
            ) : (
                <Error />
            )}
        </>
    );
};

export default GamePage;