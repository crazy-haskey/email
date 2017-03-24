import React from 'react';
import Collection from './../collector';
import Group from './group';

import Text from './../../form/text';
import Dropdown from './../../form/dropdown';
import Checkbox from './../../form/checkbox';
import Image from './../../form/image';

import style from './../../style/style';

class Title {
	constructor(){
		this.subclass = Dropdown.model( ['default', 'blue'] );
		this.title = 'HEADER TITLE H1';

		this.padding = {
			default: '30px 0 0',
			blue: '15px 0 0'
		};

		this.color = {
			default: '#464547',
			blue: '#39c2d7'
		};
	}
	template(index) {
		return (
			<tr key={index}>
				<td style={style("margin: 0;", {
					padding: this.padding[ this.subclass.get() ]
				})}>
					<h1 style={style("margin: 0; font-family: arial; margin: 0; font-size: 20px; text-transform: uppercase; -webkit-text-size-adjust:none; text-transform: uppercase;", {
						color: this.color[ this.subclass.get() ]
					})}>
						{this.title}
					</h1>
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

Title.display = 'Title';
Title.group = Group;


Collection.push(Title);









// class Test {
// 	constructor(){
// 		this.subclass = Dropdown.model( ['red', 'green', 'blue'] );
// 		this.size = Dropdown.model( ['14px', '20px', '30px'] );
// 		this.width = 100;
// 		this.title = 'Name';
// 		this.content = 'lorem ipsum';
// 		this.link = 'http://google.com';
// 		this.flag = true;
// 		this.image;
// 	}

// 	template() {
// 		return (
// 			<div>
// 				{this.flag &&
// 					<div> !!!!!!!!!!!!!!!!!!! </div>
// 				}

// 				<hr/>
// 				{String(this.flag)}
// 				<hr/>

// 				<div style={style('height:100px;float:left', {
// 					width: this.width+'px', 
// 					background: this.subclass.get()
// 				})}></div>

// 				<h1 style={{fontSize: this.size.get() }}>
// 					{this.title}
// 				</h1>

// 				<p>
// 					{this.content}
// 					&nbsp;<a target="_blank" href={this.link}>read more</a>
// 				</p>

// 				<img src={this.image} />

// 			</div>
// 		)
// 	}
// 	form() {
// 		return (
// 			<div>
// 				<Dropdown model={this.subclass} /><br/>
// 				<Dropdown model={this.size} /><br/>
// 				<Text model={this} token="title" long /><br/>
// 				<Text model={this} token="width" number /><br/>
// 				<Text model={this} token="content" long /><br/>
// 				<Text model={this} token="link" /><br/>
// 				<Checkbox model={this} token="flag"/><br/>
// 				<Image model={this} token="image" /><br/>
// 			</div>
// 		)
// 	}
// }

// Test.display = 'Test';

// Collection.push(Test);