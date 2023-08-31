import { Typography } from '@mui/material';
import styles from './GameInfo.module.scss';

interface InfoProps {
    title: string | undefined,
    author: string | undefined,
    developer: string | undefined,
    date: string | undefined,
    genre: string | undefined,
}

const GameInfo = (props: InfoProps) => {
    return (
        <div id={styles.info}>
            <Typography variant='h4' id={styles.title}>{props.title}</Typography>
            <Typography variant='subtitle1' id={styles.subtitle}>Дополнительная информация</Typography>

            <div id={styles.container}>
                <div>
                    <Typography variant='subtitle2'>Разработчик</Typography>
                    <Typography variant='overline'>{props.developer}</Typography>
                </div>

                <div>
                    <Typography variant='subtitle2'>Издатель</Typography>
                    <Typography variant='overline'>{props.author}</Typography>
                </div>

                <div>
                    <Typography variant='subtitle2'>Дата релиза</Typography>
                    <Typography variant='overline'>{props.date}</Typography>
                </div>

                <div>
                    <Typography variant='subtitle2'>Жанр</Typography>
                    <Typography variant='overline'>{props.genre}</Typography>
                </div>
            </div>
            
        </div>
    )
}

export default GameInfo;