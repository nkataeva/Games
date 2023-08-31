import React from 'react';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from './Error.module.scss'

function Error() {
    return (
        <div id={styles.content}>
            <ErrorOutlineIcon color="error" fontSize="large" />
            <Typography variant="body1" color="error" gutterBottom>
                Ошибка при получении данных с сервера
            </Typography>
        </div>
    );
}

export default Error;