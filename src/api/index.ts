import express from 'express';

import {MessageResponse} from '../models/models';
import emojis from './emojis';
import musics from './musics';
import notes from './notes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - Musics, Notes, Emojis',
  });
});

router.use('/emojis', emojis);
router.use('/musics', musics);
router.use('/notes', notes);

export default router;
