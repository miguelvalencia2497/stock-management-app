import React from 'react';
import { AddItemComponent } from './AddItemComponent';
import { ItemComponent } from './ItemComponent';

export class StockManagementComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
		this.addThis = this.addThis.bind(this);
		this.getAll = this.getAll.bind(this);
		this.deleteThis = this.deleteThis.bind(this);
	}

	componentWillMount() {
		this.getAll();
	}

	getAll(){
		fetch('/api/items', {
			method: 'GET',
		}).then(function(items){
			return items.json();
		}).then( json=> {
			this.setState({
				items: json
			});
		});
	}

	addThis(item){
		var itemName = item.itemName.value;
		var itemCategory = item.itemCategory.value;
		var itemStocknum = item.itemStocknum.value;
		var a = this;
		
		fetch('/api/items', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				itemName: itemName,
				category: itemCategory,
				stock: itemStocknum
			})
		}).then(function(){
			a.getAll();
		});
	}

	deleteThis(item){
		var itemId = item._id;
		var a = this;
		fetch(`/api/items/${itemId}`, {
			method: 'DELETE'
		}).then(function(){
			a.getAll();
		});

	}

	render() {
		var items = this.state.items;
		items = items.map(function(item, index){
			return(
				<ItemComponent item={item} key={index} onDelete={this.deleteThis}/>
				// <li key={index}>
				// 	<span className="item-name">{item.itemName}</span>
				// </li>
			)
		}.bind(this));

		return(
			<div>
				<h2>Items</h2>
				<ul>
					{items}
				</ul>
				<AddItemComponent onAdd={this.addThis}/>
			</div>
		);
	}
}