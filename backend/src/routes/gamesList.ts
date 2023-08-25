import express from 'express';
import controller from '../controllers/gamesList';

const router = express.Router();

router.get('/games', controller.getAllGames);

export default router;