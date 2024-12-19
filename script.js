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