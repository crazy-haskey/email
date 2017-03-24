import React from 'react';

import style from './../style/style';


const Wrapper = (props) => {
	return (
		<table width="100%" cellSpacing="0" cellPadding="0" style={style("margin: 0 auto; border: 0;")}>
			<tbody>
				<tr>
					<td style={style("text-align: center; vertical-align: top")}>
						<table width="738" height="216" cellSpacing="0" cellPadding="0" style={style("border: 0; margin: 17px auto 0; text-align: left")}>
							<tbody>
								<tr>
									<td style={style("padding-left: 24px; padding-top: 30px; padding-right: 24px; padding-bottom: 70px; background-color: #39c2d7")}>
										<img width="79" height="28" src="https://drive.google.com/uc?id=0B0gvOB9B-lkHWWE5elI2aGFXbkU" alt="EPAM"/>
									</td>
								</tr>
								<tr>
									<td style={style("padding-left: 24px; padding-right: 24px; padding-bottom: 22px; background-color: #39c2d7")}>
										<img src="https://drive.google.com/uc?id=0B0gvOB9B-lkHTWQ4c3d5NDZYMU0" alt=""/>
									</td>
								</tr>

								<tr>
									<td style={style("padding: 30px 24px 20px; font-weight: 700; font-family: Arial,'Times New Roman', serif; color:#000000; background-color: #eef2f5")}>
										Друзья, 
									</td>
								</tr>

								{props.children}

								<tr>
									<td style={style("color: #000000; font-size: 16px; font-weight: 700; padding-top: 20px; padding-right: 24px; padding-left: 24px; padding-bottom: 37px; font-family: Arial,'Times New Roman', serif;")}>
										Welcome on board!
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Wrapper;


