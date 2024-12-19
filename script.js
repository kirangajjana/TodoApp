let darkmode=document.querySelector('#darkmode');
let lightmode=document.querySelector('#lightmode');

let body=document.querySelector('body');


darkmode.addEventListener('click',function()
{
    body.style.backgroundColor="black";
});

lightmode.addEventListener('click',function()
{
    body.style.backgroundColor='rgb(156, 235, 208)';
});

// ###################################################################

let button1=document.querySelector('#button1');
let input=document.querySelector('#input');
let content=document.querySelector('#content') //inner text
