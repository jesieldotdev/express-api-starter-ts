import express from 'express'
import { MusicProps, musicListProps } from '../models/models';
import viewController from './viewController'

const router = express.Router()

const {musicsList, Music} = viewController()

router.get<{}, musicListProps>('/', (req, res) => {
    res.json(musicsList)
})

router.post<MusicProps>('/', (req, res)=> {
    let newMsc = new Music({
        title: req.body.title,
        artist: req.body.artist,
    })
    newMsc.save()
    res.send(musicsList)
    // res.send(newMsc.status() ? 'Musica Adicionada' : 'Musica existe')

    
})

export default router