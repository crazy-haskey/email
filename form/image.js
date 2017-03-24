import React from 'react';
import AbstractFormController from './abstract';

class Image extends AbstractFormController {
	constructor(){
		super();
	}
	get(event){
		return event.target.value.split('\\').pop();
	}
	render(){
		return (
			<div className="form-group">
				{this.label()}
				<input className="form-control" type="file" onChange={this.handler}/>
			</div>
		)
	}
}

export default Image;