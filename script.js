const colors = {
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  lightBlue: 'lightBlue'
}

const html = document.querySelector('html');


let flag = 0;

function colorChange(color) {
  
  if(flag === 0){
    html.style.backgroundColor = colors[color];
    flag = 1;
  } else {
    html.style.backgroundColor = 'white';
    flag = 0;
  }
  console.log(flag);
}


document.getElementById('redColor').addEventListener('click',() => {
  colorChange('red');
});
document.getElementById('greenColor').addEventListener('click',() => {
  colorChange('green');
});
document.getElementById('yellowColor').addEventListener('click',() => {
  colorChange('yellow');
});
document.getElementById('lightBlueColor').addEventListener('click',() => {
  colorChange('lightBlue');
});



