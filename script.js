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
let content=document.querySelector('#content'); //inner text
let btn=document.getElementsByTagName('h1')[0];

let parent=document.getElementById('maindiv');
button1.addEventListener('click', function() {
    let todoText = input.value.trim(); // Get the trimmed input value
    if (todoText !== "") { // Only add if input is not empty
        // Create the new todo item
        let a = document.createElement('p');
        a.innerHTML = todoText;

        // Create the delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add('delete-btn'); // Add class for styling

        // Append the delete button to the todo item
        a.appendChild(deleteBtn);

        // Append the todo item to the parent container
        parent.appendChild(a);

        // Clear the input field after adding the todo
        input.value = "";

        // Add event listener to delete button
        deleteBtn.addEventListener('click', function() {
            parent.removeChild(a); // Remove the todo item when delete button is clicked
        });
    }
});

