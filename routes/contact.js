var express = require('express')
var router = express.Router()

router.get('/pokemon', function(req, res) {

res.send('All Pokemon Details')

})

router.get('/new', function(req, res) {

res.send('Please add new Pokemon here')

})

router.get('/form', function(req, res) {

res.send('Please search for Pokemon here')

})


router.get('/:id', function(req, res) {

res.send('Pokemon '+ req.params.id)

})


router.get('/:id/edit', function(req, res) {

res.send('Edit Pokemon '+ req.params.id + ' details')

})






module.exports = router
