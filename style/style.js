// function style____(str, params) {
// 	let result = {};
// 	let attributes = str.split(';');

// 	for (let i = 0; i < attributes.length; i++) {
// 		let entry = attributes[i].split(':');
// 		result[ entry[0] ] = entry[1];
// 	}

// 	return Object.assign(result, params);	
// }


function style(css, params) {
	let result = {};
	let s = css.toLowerCase().replace(/-(.)/g, function (m, g) {
		return g.toUpperCase();
	}).replace(/;\s?$/g,"").split(/:|;/g);

	for (let i = 0; i < s.length; i += 2) {
		result[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
	}

	return Object.assign(result, params);	
}

export default style;

