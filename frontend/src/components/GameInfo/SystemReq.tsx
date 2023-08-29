import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './GameInfo.module.scss';

const MyComponent = () => {
  return (
    <div id={styles.info}>
      <Typography variant='subtitle1' id={styles.subtitle}>
        Минимальные системные требования
      </Typography>
      <div id={styles.container}>
        <div>
          <Typography variant='subtitle2'>ОС</Typography>
          <Typography variant='body2'>Windows 7 64-Bit (SP1) or Windows 10 64-Bit</Typography>
        </div>

        <div>
          <Typography variant='subtitle2'>Процессор</Typography>
          <Typography variant='body2'>Intel Core i3-4340 or AMD FX-6300</Typography>
        </div>

        <div>
          <Typography variant='subtitle2'>Память</Typography>
          <Typography variant='body2'>8GB RAM</Typography>
        </div>

        <div>
          <Typography variant='subtitle2'>Хранение</Typography>
          <Typography variant='body2'>NVIDIA GeForce GTX 670 \/ GeForce GTX 1650 or Radeon HD 7950</Typography>
        </div>

        <div>
          <Typography variant='subtitle2'>Графика</Typography>
          <Typography variant='body2'>175GB HD space</Typography>
        </div>
      </div>


    </div>
  );
};

export default MyComponent;
