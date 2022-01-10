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