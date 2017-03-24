import React from 'react';
import Collection from './../collector';
import Group from './group';

import Text from './../../form/text';

import style from './../../style/style';

class Date {
	constructor(){
		this.date = 'January 1, 2017';
	}

	template(index) {
		return (
			<tr key={index}>
				<td style={style("margin: 0; padding: 0 20px 20px;")}>
					<p style={style("color: #999999;font-family: arial; font-size: 12px; -webkit-text-size-adjust:none; line-height: 16px; font-weight: bold; margin: 0; padding: 12px 0; border-bottom: 1px solid #eee;")}>
						{this.date}
					</p>
				</td>
			</tr>
		)
	}
	form() {
		return (
			<div>
				<Text model={this} token="date" label="Date" />
			</div>
		)
	}
}

Date.display = 'Date';
Date.group = Group;

Collection.push(Date);
