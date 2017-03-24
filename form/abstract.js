import React from 'react';
import mediator from './../core/mediator';

class AbstractFormController extends React.Component {
	constructor(){
		super();
		this.handler = this.handler.bind(this);
	}
	get(event){
		return event.target.value;
	}
	handler(event){
		this.props.model[ this.props.token ] = this.get(event);
		mediator.publish('reload');
	}
	value(){
		return this.props.model[ this.props.token ];
	}
	label(){
		return (
			<label>{this.props.label}</label>
		)
	}
}

AbstractFormController.defaultProps = {
    token: 'value'
};

export default AbstractFormController;