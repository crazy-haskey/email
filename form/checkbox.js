import React from 'react';
import AbstractFormController from './abstract';

class Checkbox extends AbstractFormController {
	constructor(){
		super();
	}
	get(event){
		return event.target.checked;
	}
	render(){
		return (
			<div className="form-group">
				{this.label()}
				<input className="form-control" type="checkbox" checked={this.value()} onChange={this.handler}/>
			</div>
		)
	}
}

export default Checkbox;