import React from 'react';

export class AddItemComponent extends React.Component{
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onAdd(this.refs);
		this.refs.itemName.value = '';
		this.refs.itemCategory.value = '';
		this.refs.itemStocknum.value = null;
	}

	render(){
		return(
			<form id="stock-form" onSubmit={this.handleSubmit}>
				<input type='text' placeholder='Item name' required ref='itemName' />
				<input type='text' placeholder='Category' ref='itemCategory' />
				<input type='number' ref='itemStocknum' placeholder='Quantity' min='0' />
				<input type='submit' value='Add item'/>
			</form>
		);
	}
}