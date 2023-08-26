import express from 'express';
import controller from '../controllers/gamesList';
import getGame from '../controllers/game';

const router = express.Router();

router.get('/games', controller.getAllGames);
router.get('/games/:id', getGame);

export default router;