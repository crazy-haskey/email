import React from 'react';
import Collection from './../collector';
import Group from './group';

import Text from './../../form/text';
import Dropdown from './../../form/dropdown';

import style from './../../style/style';

class TitleH2 {
	constructor(){
		this.subclass = Dropdown.model( ['blue', 'green', 'red'] );
		this.title = 'HEADER H2';

		this.color = {
			blue: '#39c2d7',
			green: '#A3C644',
			red: '#B22746'
		};
	}
	template(index) {
		return (
			<tr key={index} style={{ backgroundColor: this.color[ this.subclass.get() ] }}>
				<td style={style("padding: 15px 20px;")}>
					<h2 style={style("color: #ffffff; font-family: arial; margin: 0; font-size: 20px; line-height: 20px; text-transform: uppercase; -webkit-text-size-adjust:none; text-transform: uppercase; text-align:center;")}>
						{this.title}
					</h2>
				</td>
			</tr>
		)
	}
	form() {
		return (
			<div>
				<Text model={this} token="title" label="Title" />
				<Dropdown model={this.subclass} label="Style" />
			</div>
		)
	}
}

TitleH2.display = 'Title H2';
TitleH2.group = Group;


Collection.push(TitleH2);

