










 
//Color change
let btnPri=document.querySelector('#primary');
let btnDan=document.querySelector('#danger');
let btnSuc=document.querySelector('#success');

btnPri.addEventListener('click',()=>btnPri.style.backgroundColor='#337ab7')
btnDan.addEventListener('click',()=>btnDan.style.backgroundColor='#c9302c')
btnSuc.addEventListener('click',()=>btnSuc.style.backgroundColor='#4cae4c')





//CALCULATOR PROGRAM

const display=document.getElementById("display");

function appendToDisplay(input){
     display.value+=input;

}

function clearDisplay(){
    display.value="";
}
  
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}