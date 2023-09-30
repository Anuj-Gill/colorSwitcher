
const buttons = document.querySelectorAll('.colorBox');
const body = document.querySelector('body');


let flag = 0;


buttons.forEach((button) => {

  button.addEventListener('click', (e) => {
    // console.log(e.target.id);
    if(e.target.id === 'red' && flag === 0){
      body.style.backgroundColor = e.target.id;
      flag = 1;
    }
    else if(e.target.id === 'yellow' && flag === 0){
      body.style.backgroundColor = e.target.id;
      flag = 1;
    }
    else if(e.target.id === 'green' && flag === 0){
      body.style.backgroundColor = e.target.id;
      flag = 1;
    }
    else if(e.target.id === 'lightblue' && flag === 0){
      body.style.backgroundColor = e.target.id;
      flag = 1;
    } else {
      body.style.backgroundColor = 'white';
      flag = 0;
    }

  })
})





