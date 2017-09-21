import React from 'react';

export class ItemComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(e){
		this.props.onDelete(this.props.item);
	}

	render(){
		return(
			<li>
				<div>
					<span className='delete' onClick={this.handleDelete}>x</span>
					<span className='item-name'>{this.props.item.itemName}</span>
					<span className='item-category'>{this.props.item.category}</span>
					<span className='item-stocknum'>{this.props.item.stock}</span>
				</div>
			</li>
		);
	}
}