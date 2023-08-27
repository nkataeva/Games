import express from 'express';
import getGamesList from '../controllers/gamesList';
import getGame from '../controllers/game';

const router = express.Router();

router.post('/games', getGamesList);
router.get('/games/:id', getGame);

export default router;