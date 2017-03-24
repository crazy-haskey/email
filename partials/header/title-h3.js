import React from 'react';
import Collection from './../collector';
import Group from './group';

import Text from './../../form/text';
import Checkbox from './../../form/checkbox';

import style from './../../style/style';

class TitleH3 {
	constructor(){
		this.title = 'HEADER H3';
		this.uppercase = true;
		this.colored = true;
	}
	template(index) {
		return (
			<tr key={index} style={{ backgroundColor: this.color[ this.subclass.get() ] }}>
				<td style={style("padding: 30px 20px 15px;")}>
					<h3 style={style("color: #464547; font-family: arial; margin: 0; font-size: 16px; line-height: 16px; -webkit-text-size-adjust:none;", {
						textTransform: (this.uppercase) ? "uppercase" : "none",
						color: (this.colored) ? "#39c2d7" : "#464547"
					})}>
						{this.title}
					</h3>
				</td>
			</tr>
		)
	}
	form() {
		return (
			<div>
				<Text model={this} token="title" label="Title" />
				<Checkbox model={this} token="flag" label="Uppercase"/>
				<Checkbox model={this} token="colored" label="Blue"/>
			</div>
		)
	}
}

TitleH3.display = 'Title H3';
TitleH3.group = Group;


Collection.push(TitleH3);


