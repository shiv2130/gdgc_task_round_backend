const express = require('express');
const list = require('../models/shopping.models.js')
const router = express.Router();
const {createList, getLists, getList, updateList, deleteList} = require('../controllers/list.controls.js')


router.get('/', getLists)

router.get('/:id', getList)

router.post('/', createList)

router.put('/:id', updateList)

router.delete('/:id', deleteList)



module.exports = router;