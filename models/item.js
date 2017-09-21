const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	itemName: {
		type: String,
		required: [true, 'item name required']
	},
	category: {
		type: String,
		default: 'none'
	},
	stock: {
		type: Number,
		required: [true, 'stock number is required'],
		default: 0
	}
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;