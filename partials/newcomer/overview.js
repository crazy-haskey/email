import React from 'react';
import Collection from './../collector';
import Group from './group';

import Text from './../../form/text';

import style from './../../style/style';

class Overview {
	constructor(){
		this.text = `Во второй половине марта наша команда продолжала пополняться:

К *Front-end Division Belarus*  присоединились *Евгений Ковальчук, Дмитрий Масюль, Александр Хвайницкий*.

Также произошло пополнение *в команде HR BP*: ко мне присоединилась *Юлия Самуйлик, HR Business Partner Assistant*. В ближайшее время Юля подключится к процессу адаптации и будет сопровождать новых коллег на этом этапе. 

Продолжаем знакомство, поддерживаем ребят и желаем скореейшей и профессиональных побед!

Добро пожаловать на борт!`;
	}

	template(index) {
		return (
			<tr key={index}>
				<td style={style("padding: 0 24px 30px; font-size: 14px; line-height: 25px; font-family: Arial,'Times New Roman', serif; color:#727272; background-color: #eef2f5")}
					dangerouslySetInnerHTML={{__html: Text.format(this.text)}}
				></td>
			</tr>
		)
	}
	form() {
		return (
			<div>
				<Text model={this} token="text" label="Overview" long />
			</div>
		)
	}
}

Overview.display = 'Overview';
Overview.group = Group;


Collection.push(Overview);







