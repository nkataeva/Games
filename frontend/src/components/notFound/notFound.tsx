import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.scss"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NotFound = () => {
  return (
    <Box id={styles.box}>
      <Typography variant="h3">404</Typography>
      <Typography variant="h5">Page not found</Typography>
      <Link to="/" id={styles.link}>
        Вернуться на главную страницу
      </Link>
    </Box>
  );
};

export default NotFound;