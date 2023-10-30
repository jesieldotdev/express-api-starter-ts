import express from 'express'
import viewController from './viewController'
import { NoteProps } from '../models/models'

const router = express.Router()

const {notesList, Note} = viewController()

router.get('/', (req, res) => [
    res.json(notesList)
])

router.post('/', (req, res) => {
    let newNote = new Note({
        id: req.body.id, body: req.body.body, status: req.body.status})
        newNote.save()
    res.send(notesList)
})

export default router