import React from "react";
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Card = () => {
    return (
        <CardMUI sx={{ maxWidth: 245 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary"  mt={2} mb={5}>
                        09.08.2023
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Приключения, боевик
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        Алексей Попов
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardMUI>
    )
}

export default Card;