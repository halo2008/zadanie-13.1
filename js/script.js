var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

var boxes =	document.getElementById('box');
var el; 
var para;
for (var i=0; i < data.length; i++) {
	
	
	//cat.replace(/,/g," ");

	el = document.createElement('div');
	para = document.createElement('div');
	el.setAttribute('id', data[i].id);

	var header = document.createElement('h1');
	var text = document.createTextNode(data[i].title);
	header.appendChild(text);
	el.appendChild(header);
	boxes.appendChild(el);	
	
	
	
	para.innerHTML = (data[i].content);	
	
	el.appendChild(para);

	var cat = (data[i].categories).join("");
	el.classList.add(cat);

}
