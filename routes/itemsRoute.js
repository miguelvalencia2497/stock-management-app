const express = require ('express');
const Item = require('../models/item');
const router = express.Router();


router.get('/items', function(req, res){
	Item.find({}).then(function(items){
		res.send(items);
	})
});

router.post('/items', function(req, res){
	Item.create(req.body).then(function(item){
		res.send(item);
	});
});

router.put('/items/:id', function(req, res){
	res.send('responding');
});

router.delete('/items/:id', function(req, res){
	Item.findByIdAndRemove({
		_id: req.params.id
	}).then(function(item){
		res.send(item);
	})
});



module.exports = router;