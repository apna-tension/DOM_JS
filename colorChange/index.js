let buttons = document.querySelectorAll('.button');
console.log(buttons);
// console.log("Hello, world!");
const body = document.querySelector('body');
// console.log(body);

buttons.forEach( (button) =>  {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
        body.style.backgroundColor = `${e.target.id}`;
    })
});