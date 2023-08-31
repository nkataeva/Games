import React from 'react';
import Card from '../../components/Card';
import SelectForm from '../../components/SelectForm';
import options from '../../utils/searchOptions';
import { CircularProgress, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from "./MainPage.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../data/api';
import { setGames } from '../../store/features/gameListSlice';
import { RootState } from '../../store/store';
import { GamesList } from '../../types/GamesTypes';
import { useNavigate } from 'react-router-dom';
import { APPRoute } from '../../paths';

const MainPage = () => {
    const dispatch = useDispatch();
    const games = useSelector((state: RootState) => state.games.games);

    React.useEffect(() => {
        const fetchGames = async () => {
            try {
                const gamesData = await getGames(null); // Получаем данные с сервера
                dispatch(setGames(gamesData)); // Заносим данные в хранилище
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };
        fetchGames();
    }, [dispatch]);

    React.useEffect(() =>{
        console.log(games)
    }, [games])
    

    const [selectedOptions, setSelectedOptions] = React.useState({
        genre: '',
        platform: '',
        sort: '',
    });

    const handleApply = async () => {
        try {
            const gamesData = await getGames(selectedOptions); // Получаем данные с сервера
            dispatch(setGames(gamesData)); // Заносим данные в хранилище
            console.log(games)
        } catch (error) {
            console.error('Error fetching games:', error);
        }
        console.log(selectedOptions);
    };

    const handleReset = () => {
        setSelectedOptions({
            genre: '',
            platform: '',
            sort: '',
        });
    };

    const navigate = useNavigate();
    const openGame = (id: number) => {
        navigate(`${APPRoute.GAME}/${id}`);
    }

    return (
        <div id={styles.content}>
            <Typography variant="h4" id={styles.title}>
                Free-To-Play Games interface
            </Typography>

            <div id={styles.options}>
                <SelectForm
                    name={'Жанр'}
                    options={options.categoryOptions}
                    value={selectedOptions.genre}
                    onChange={(value) =>
                        setSelectedOptions({ ...selectedOptions, genre: value })
                    } />
                <SelectForm
                    name={'Платформа'}
                    options={options.platformOptions}
                    value={selectedOptions.platform}
                    onChange={(value) =>
                        setSelectedOptions({ ...selectedOptions, platform: value })
                    } />
                <SelectForm
                    name={'Сортировать'}
                    options={options.sortOptions}
                    value={selectedOptions.sort}
                    onChange={(value) =>
                        setSelectedOptions({ ...selectedOptions, sort: value })
                    } />
            </div>

            <Stack spacing={2} direction="row" id={styles.buttons}>
                <Button variant="contained" onClick={handleApply}>Применить</Button>
                <Button variant="outlined" onClick={handleReset}>Сбросить</Button>
            </Stack>

            {games.length ? (<div id={styles.container}>
                {games.map((el) =>
                    <Card data={el} onClick={() => openGame(el.id)}/>
                )}
            </div>) : <CircularProgress sx={{m: '0 auto'}}/>}
        </div>
    )
}

export default MainPage;