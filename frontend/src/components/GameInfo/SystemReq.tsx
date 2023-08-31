import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './GameInfo.module.scss';
import { GameReq } from '../../types/GamesTypes';

interface props {
  req: GameReq | undefined;
}

const SystemReq = (props: props) => {
  return (
    <div id={styles.info}>
      <Typography variant='subtitle1' id={styles.subtitle}>
        Минимальные системные требования
      </Typography>
      <div id={styles.container}>
        <div>
          <Typography variant='subtitle2'>ОС</Typography>
          <Typography variant='body2'>{props.req?.os}</Typography>
        </div>

        <div>
          <Typography variant='subtitle2'>Процессор</Typography>
          <Typography variant='body2'>{props.req?.processor}</Typography>
        </div>

        <div>
          <Typography variant='subtitle2'>Память</Typography>
          <Typography variant='body2'>{props.req?.memory}</Typography>
        </div>

        <div>
          <Typography variant='subtitle2'>Хранение</Typography>
          <Typography variant='body2'>{props.req?.storage}</Typography>
        </div>

        <div>
          <Typography variant='subtitle2'>Графика</Typography>
          <Typography variant='body2'>{props.req?.graphics}</Typography>
        </div>
      </div>
    </div>
  );
};

export default SystemReq;
