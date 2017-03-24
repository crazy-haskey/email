import React from 'react';
import './components';
import Collection from './collector';

class Factory {
	constructor(){
		this.components = [];
	}
	registerAll(arr){
		arr.forEach(component => { this.register(component) });
	}
	register(component){
		this.components.push(component);
	}
}

let factory = new Factory();
factory.registerAll( Collection );

export default factory;


