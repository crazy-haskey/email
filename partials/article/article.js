import React from 'react';
import Collection from './../collector';
import Group from './group';

import Text from './../../form/text';
import Image from './../../form/image';

import style from './../../style/style';

class Article {
	constructor(){
		this.image;
		this.date = 'June 25, 2015 Kiev';
		this.title = 'EPAM Life Sciences Awarded Grand Prize at Bio-IT World';
		this.text = '24 hours of adrenaline, 16 teams from 7 countries, useful business ideas for the company — the third-ever hackathon...';
		this.url = 'http://epam.com';
		this.more = 'Read More';
	}

	template(index) {
		return (
			<tr key={index}>
				<td style={style("padding: 20px 20px; border-bottom: 1px solid #f0f0f0;")}>
					<table cellPadding="0" cellSpacing="0" width="100%" style={style("text-align: left; font-family: Arial; border-spacing: 0; margin: auto;")}>
						<tbody>
							<tr>
								<td style={style("vertical-align: top;")}>
									<img src={this.image} height="150" width="270" alt="" style={style("display: block;")}/>
								</td>
								<td style={style("padding-left: 24px; vertical-align: top;")}>
									<p style={style("color: #999999;font-family: arial; font-size: 12px; -webkit-text-size-adjust:none; line-height: 16px; font-weight: bold; margin: 0; text-transform: uppercase; margin-bottom: 10px;")}>
										{this.date}
									</p>
									<h2 style={style("color: #464547; font-family: arial; margin: 0; margin-bottom: 10px; font-size: 16px; line-height: 18px; text-transform: uppercase; -webkit-text-size-adjust:none; text-transform: uppercase;")}>
										{this.title}
									</h2>
									<p style={style("color: #464547; margin: 0; font-size: 14px; font-family: Arial; line-height: 18px; -webkit-text-size-adjust:none;")}>
										{this.text}
										<br/>
										<a href={this.url} style={style("font-size: 14px; margin: 0; font-family: Arial; line-height: 18px; -webkit-text-size-adjust:none; color: #39c2d7;  text-decoration: none;")}>
											{this.more}
										</a>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		)
	}
	form() {
		return (
			<div>
				<Image model={this} token="image" label="Block image" />
				<Text model={this} token="date" label="Date" />
				<Text model={this} token="title" label="Title" />
				<Text model={this} token="text" label="Article text" long />
				<Text model={this} token="url" label="Link" />
				<Text model={this} token="more" label="Link text" />
			</div>
		)
	}
}

Article.display = 'Article (2cols with image)';
Article.group = Group;


Collection.push(Article);







