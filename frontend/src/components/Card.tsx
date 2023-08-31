import React from "react";
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { GameFromList } from "../types/GamesTypes";

interface CardProps {
    data: GameFromList,
    onClick: () => void;
}

const Card = (props: CardProps) => {
    return (
        <CardMUI sx={{ maxWidth: 245 }} onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.data.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.data.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.data.genre}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {props.data.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardMUI>
    )
}

export default Card;