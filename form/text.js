import React from 'react';
import AbstractFormController from './abstract';

class Text extends AbstractFormController {
	constructor(){
		super();
	}
	input(){
		let type = (this.props.number) ? 'number' : 'text';
		return (
			<div className="form-group">
				{this.label()}
				<input className="form-control" type={type} value={this.value()} onChange={this.handler}/>
			</div>
		)
	}
	textarea(){
		return (
			<div className="form-group">
				{this.label()}
				<textarea className="form-control" value={this.value()} onChange={this.handler}/>
			</div>
		)
	}
	render(){
		return (this.props.long) ? this.textarea() : this.input();
	}
}

Text.format = function(text){
	return text.replace(/\*([^\*]+)\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>");
}

export default Text;