import { Typography } from '@mui/material';
import styles from './GameInfo.module.scss';

const GameInfo = () => {
    return (
        <div id={styles.info}>
            <Typography variant='h4' id={styles.title}>Diablo Immortal</Typography>
            <Typography variant='subtitle1' id={styles.subtitle}>Дополнительная информация</Typography>

            <div id={styles.container}>
                <div>
                    <Typography variant='subtitle2'>Разработчик</Typography>
                    <Typography variant='overline'>Alex Smith</Typography>
                </div>

                <div>
                    <Typography variant='subtitle2'>Издатель</Typography>
                    <Typography variant='overline'>Bizzard Company</Typography>
                </div>

                <div>
                    <Typography variant='subtitle2'>Дата релиза</Typography>
                    <Typography variant='overline'>09.03.2022</Typography>
                </div>

                <div>
                    <Typography variant='subtitle2'>Жанр</Typography>
                    <Typography variant='overline'>anime</Typography>
                </div>
            </div>

        </div>
    )
}

export default GameInfo;