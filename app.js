const frame = document.getElementsByClassName('mainFrame');
const nameColor = document.getElementsByClassName('mainName');
const btn_next = document.getElementsByClassName('btnNext');
const btn_back = document.getElementsByClassName('btnBack');
let hex = '0123456789ABCDEF';
let arrayColors = [];
let clickIndex = 0;

btn_next[0].addEventListener('click', (e) => { 
	let randomColor = getRandomColor();
	arrayColors.push( randomColor );
	clickIndex = arrayColors.length - 1;
		frame[0].style.backgroundColor = randomColor;
		nameColor[0].innerHTML = randomColor;
});

btn_back[0].addEventListener('click', (e) => {
	if( clickIndex > 0 ) { 
		clickIndex--;
			frame[0].style.backgroundColor = arrayColors[ clickIndex ];
			nameColor[0].innerHTML = arrayColors[ clickIndex ];
	};
 });

function getRandomColor() {
	let hexColor = '#';
	for ( let i = 0; i < 6; i++ ) {
		hexColor += hex[ Math.floor( Math.random() * hex.length ) ];
	}
  return hexColor;
};

let copyText = document.getElementsByClassName('btnCopy');
copyText[0].addEventListener('click', (e) =>{
	navigator.clipboard.writeText(nameColor[0].textContext)
 .then(() => {
   console.log('Good Copy');
 })
 .catch(err => {
   console.log('Something went wrong', err);
 });
});
