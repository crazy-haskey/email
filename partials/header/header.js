import React from 'react';
import Collection from './../collector';
import Group from './group';

import Text from './../../form/text';
import Dropdown from './../../form/dropdown';

import style from './../../style/style';

class Header {
	constructor(){
		this.subclass = Dropdown.model( ['contact', 'umbrella'] );
		this.url = 'http://google.com';

		this.image = {
			contact: 'images/header-4.png',
			umbrella: 'images/header-3.png'
		};
	}
	template(index) {
		return (
			<tr key={index} style={style("background-color: #333;")}>
				<td style={style("margin: 0; padding: 0; vertical-align: middle; text-align: center;")}>
					<a href={this.url} target="_blank" style={style("text-decoration: none;")}>
						<img src={this.image[ this.subclass.get() ]} width="600" height="59" style={style("display: block; width: 600px; height: 59px; border: none;")} />
					</a>
				</td>
			</tr>
		)
	}
	form() {
		return (
			<div>
				<Text model={this} token="url" label="URL" />
				<Dropdown model={this.subclass} label="Style" />
			</div>
		)
	}
}

Header.display = 'Header';
//Header.group = Group;

Collection.push(Header);

