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
  console.log(this.classList);
  if ((!this.textContent && !keyCodesCheck[e.keyCode] && (e.keyCode < 48 || e.keyCode > 57)) || (!e.keyCode) && this.classList.value==="empty")
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
  else if (this.textContent==="-" || e.keyCode===189)
  {
    let prevOper = operations;
    operations = "subtract";
    document.querySelector(".display").textContent+="-";
    number1turn = false;
    number2turn = true;
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
      document.querySelector(".display").textContent = number1+ "-";
    }
  }
  else if (this.textContent==="*" || e.keyCode===56)
  {
    let prevOper = operations;
    operations = "mulitply";
    document.querySelector(".display").textContent+="*";
    number1turn = false;
    number2turn = true;
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
      document.querySelector(".display").textContent = number1+ "*";
    }
  }
  else if (this.textContent==="/" || e.keyCode===191)
  {
    let prevOper = operations;
    operations = "divide";
    document.querySelector(".display").textContent+="/";
    number1turn = false;
    number2turn = true;
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
      document.querySelector(".display").textContent = number1+ "/";
    }
  }
  else if (this.textContent === '=' || e.keyCode===13)
  {
    if(operations && number2)
    {
      sum = operate(Number(number1),operations,number2);
      document.querySelector(".display").textContent=sum;
      number1=sum;
      number2=null;
      number1turn = true;
      number2turn = false;
      operations=null;
      document.querySelector(".decimal").disabled=false;
      if(!keyCodesCheck[190]){keyCodesCheck[190]=true;}
    }
  }
  else if (this.textContent==='C' || e.keyCode===67)
  {
    number1=null;
    number2=null;
    operations=null;
    number1turn=true;
    number2turn=false;
    document.querySelector(".display").textContent="";
    document.querySelector(".decimal").disabled=false;
    if(!keyCodesCheck[190]){keyCodesCheck[190]=true;}
    
  }
  else
  {
    let inputs;
    if (!e.keyCode)
    {
      inputs = Number(this.textContent);
    }
    else if (e.keyCode)
    {
      inputs = Number(document.querySelector(`[data-key='${e.keyCode}']`).textContent);
    }
    document.querySelector(".display").textContent+=inputs;
    if(number1turn)
    {
      if (number1)
      {
        let operaters;
        switch(operations)
        {
          case 'mulitply':operaters='*';break;
          case 'divide':operaters='/';break;
          case 'add':operaters='+';break;
          case 'subtract':operaters='-';break;
          default: operaters=operaters;
        }
        let stringNums = document.querySelector(".display").textContent.split(operaters);
        number1 = Number(stringNums[0]);
      }
      else
      {
        number1 = inputs;
      }
    }
    else if (number2turn)
    {
      if (number2)
      {
        let operaters;
        switch(operations)
        {
          case 'mulitply':operaters='*';break;
          case 'divide':operaters='/';break;
          case 'add':operaters='+';break;
          case 'subtract':operaters='-';break;
          default: operaters=operaters;
        }
        let stringNums = document.querySelector(".display").textContent.split(operaters);
        number2 = Number(stringNums[1]);
      }
      else
      {
        number2 = inputs;
      }
    }
  }
}

function animation(e)
{
  const allButtons = document.querySelectorAll("button");

}
const allButtons = document.querySelectorAll("button");
allButtons.forEach(buts=>buts.addEventListener("click", starts))
//allButtons.forEach(buts=>buts.addEventListener("click", animation))

window.addEventListener("keydown", starts);