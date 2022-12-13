
/*
Создать объект с такой структурой: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } 
Написать функцию convert(obj), которая получает аргументом obj. 
Функция должна вернуть новый объект вида:

newObj = {
    x: 20,
    y: 20,
    z: 30,
    k: 23,
    p: 13
}
*/
const obj = { 
	x: 10, 
	y: 20, 
	inner: { x: 20, z: 30 }, 
	foo2: { k: 23, p: 13 } 
  }

const newObj = convert(obj);

function convert(obj) {
	const convertedObj = {};
for (let key in obj) {
	if (typeof obj[key] === 'object') {
for (let innerKey in obj[key]) {
		convertedObj[innerKey] = obj[key][innerKey];
		}
	} else {
		convertedObj[key] = obj[key];
	}
  }
		return convertedObj;
	}
	console.log (newObj);













