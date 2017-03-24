import React from 'react';
import Collection from './../collector';
import Group from './group';

import Text from './../../form/text';
import Image from './../../form/image';

import style from './../../style/style';

class Newcomer {
	constructor(){
		this.image;
		this.department = 'Front-end Division Belarus / ';
		this.position = 'Software Engineer';
		this.name = 'Siarhei Mikhailau';
		this.skype = 'siarhei_mikhailau';
		this.description = 'Example text';
	}

	template(index) {
		return (
			<tr key={index}>
				<td>
					<table cellSpacing="0" cellPadding="0" style={style("border: 0; border-bottom: 1px solid #d2d2d2;")}>
						<tbody>
							<tr>
								<td style={style("padding-top: 23px; padding-bottom: 30px; vertical-align: top")}>
									<table cellSpacing="0" cellPadding="0" style={style("border: 0")}>
										<tbody>
											<tr>
												<td style={style("padding-left: 13px; padding-right: 13px; text-align: center; vertical-align: top")}>
													<img src={this.image} height="166" width="166" alt=""/>
												</td>
											</tr>
											<tr><td>&nbsp;</td></tr>
										</tbody>
									</table>
								</td>
								<td style={style("padding-top: 23px; padding-left: 20px; padding-bottom: 30px; vertical-align: top")}>
									<table cellSpacing="0" cellPadding="0" style={style("border: 0")}>
										<tbody>
											<tr>
												<td style={style("font-style: italic; color: #38899b; font-size: 12px; padding-bottom: 10px; font-family: Arial,'Times New Roman', serif;")}>
													<span style={style("font-style: italic; color: #38899b; font-size: 12px; padding-bottom: 10px; font-family: Arial,'Times New Roman', serif; line-height: 19px;")}>
														{this.department}
													</span>
													<br/>
													{this.position}
												</td>
											</tr>
											<tr>
												<td style={style("color: #333333; font-size: 15px; font-weight: 700; padding-bottom: 16px; font-family: Arial,'Times New Roman', serif;")}>
													{this.name}
												</td>
											</tr>
											<tr>
												<td style={style("color: #727272; font-size: 14px; font-style: italic; padding-bottom: 20px; font-family: Arial,'Times New Roman';")}>
													<img src="https://drive.google.com/uc?id=0B0gvOB9B-lkHV1BwRkhYNVVpY2M" alt="Skype"/>
													&nbsp;
													<span style={style("vertical-align: 15px;")}>
														{this.skype}
													</span>
												</td>
											</tr>
											<tr>
												<td style={style("line-height: 25px; font-family: Arial,'Times New Roman', serif; color:#727272;")}
													dangerouslySetInnerHTML={{__html: Text.format(this.description)}}
												></td>
											</tr>
										</tbody>
									</table>
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
				<Image model={this} token="image" label="Selfie" />
				<Text model={this} token="department" label="Department" />
				<Text model={this} token="position" label="Position" />
				<Text model={this} token="name" label="Name" />
				<Text model={this} token="skype" label="Skype" />
				<Text model={this} token="description" label="Self-introduction" long />
			</div>
		)
	}
}

Newcomer.display = 'Newcomer';
Newcomer.group = Group;


Collection.push(Newcomer);







