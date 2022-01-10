function add(num1,num2)
{
  return (num1+num2).toFixed(2);
}
function subtract(num1, num2)
{
  return (num1-num2).toFixed(2);
}
function mulitply(num1,num2)
{
  return (num1*num2).toFixed(2);
}
function divide(num1,num2)
{
  return (num1/num2).toFixed(2);
}

function operate(num1, operation, num2)
{
  if(operation==="divide")
  {
    return divide(num1,num2);
  }
  else if(operation==="mulitply")
  {
    return mulitply(num1,num2);
  }
  else if(operation==="subtract")
  {
    return subtract(num1,num2);
  }
  else if(operation==="add")
  {
    return add(num1,num2);
  }
}

const containerWidth = parseInt(document.querySelector(".calculator").clientWidth);
const containerHeight = parseInt(document.querySelector(".buttons").clientHeight);
console.log(containerHeight);
console.log(containerWidth)

document.querySelectorAll("button").forEach(button=>button.style.width=`${containerWidth/4}px`);
document.querySelectorAll("button").forEach(button=>button.style.height=`${containerHeight/5}px`);

let number1;
let number2;
let sum;
let operations;
let number1turn = true;
let number2turn = false;
const keyCodesCheck = {187:true, 189:true, 56:true, 191:true, 13:true, 67:true, 8:true, 190:true}
function starts(e)
{
  if (!this.textContent && !keyCodesCheck[e.keyCode] && (e.keyCode < 48 || e.keyCode > 57))
  {
    return;
  }
  if (this.textContent==="+" || e.keyCode===187)
  {
    let prevOper = operations;
    operations = "add";
    number1turn = false;
    number2turn = true;
    document.querySelector(".display").textContent+="+";
    document.querySelector(".decimal").disabled=false;
    if(!keyCodesCheck[190]){keyCodesCheck[190]=true;}
    if (number1 && number2)
    {
      switch(prevOper)
      {
        case 'mulitply':number1=(Number(number1)*number2).toFixed(2);break;
        case 'divide':number1=(Number(number1)/number2).toFixed(2);break;
        case 'add':number1=(Number(number1)+number2).toFixed(2);break;
        case 'subtract':number1=(Number(number1)-number2).toFixed(2);break;
        default: number1=number1;
      }
      number2=null;
      document.querySelector(".display").textContent = number1+ '+';
    }
  }
}

const allButtons = document.querySelectorAll("button");
allButtons.forEach(buts=>buts.addEventListener("click", starts))

window.addEventListener("keydown", starts);