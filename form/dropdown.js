import React from 'react';
import AbstractFormController from './abstract';

class Dropdown extends AbstractFormController {
	constructor(){
		super();
	}
	options(){
		return this.props.model.values.map( (item, index) => {
			return <option key={index} value={index}>{this.display(item)}</option>
		})
	}
	display(item){
		return (typeof item === 'string') ? item : item.display;
	}
	render(){
		return (
			<div className="form-group">
				<select onChange={this.handler} value={this.value()}>
					 {this.options()}
				</select>
			</div>
		)
	}
}

class Model {
	constructor(values) {
		this.values = values;
		this.value = 0;
	}
	get() {
		return this.values[ this.value ]
	}
}

Dropdown.model = function(values) {
	return new Model(values);
}

export default Dropdown;