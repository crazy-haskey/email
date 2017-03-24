import React from 'react';
import factory from './../partials/factory';
import mediator from './mediator';

import Dropdown from './../form/dropdown';

import Wrapper from './../layout/wrapper';

class Constructor extends React.Component {
	constructor(){
		super();
		this.state = {};

		this.state.content = this.load();
		this.state.components = Dropdown.model(factory.components);

		this.addComponent = this.addComponent.bind(this);
		this.removeComponent = this.removeComponent.bind(this);
		this.reload = this.reload.bind(this);
		this.save = this.save.bind(this);

		mediator.subscribe('reload', this.reload);
	}
	addComponent(){
		let component = this.state.components.get();

		this.state.content.push( new component() );
		this.reload();
	}
	removeComponent(e){
		this.state.content.splice(+e.target.dataset.index, 1);
		this.reload();
	}
	reload(){
		this.forceUpdate();
	}
	save(){
		let data = this.state.content.map( (component) => {
			return {
				constructor: component.constructor.name,
				data: Object.assign({}, component)
			}
		});
		localStorage.data = JSON.stringify(data);
	}
	load(){
		let data = JSON.parse(localStorage.data || "[]");

		return data.map( (model) => factory.create(model.constructor, model.data) );
	}
	render(){
		let output = this.state.content.map( (component, index) => {
			return component.template(index)
		})

		let form = this.state.content.map( (component, index) => {
			return (
				<div key={index}>
					{component.form()}
					<br/>
					<button data-index={index} onClick={this.removeComponent}>delete</button>
					<hr/>
				</div>
			)
		})

		return (
			<div>
				<div style={{'userSelect': 'none', 'width': '738px', 'margin': '50px auto'}}>
					{form}
					<Dropdown model={this.state.components} label="Components" />
					<button onClick={this.addComponent}>add</button>
				</div>
				<Wrapper>
					{output}
				</Wrapper>
			</div>
		)
	}
}

export default Constructor
