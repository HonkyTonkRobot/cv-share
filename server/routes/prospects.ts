import express from 'express'
import * as db from '../db/functions/prospects.ts'

const router = express.Router()

// POST /api/v1/prospects/
router.post('/', async (req, res) => {
  try {
    const prospectAdded = await db.addNewProspect(req.body)
    res.json(prospectAdded)
  } catch (error) {
    console.error(error)
    res.status(500).send('Not Added')
  }
})

export default router
