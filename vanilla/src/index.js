const number = 10;

const classToBeAdded = number > 10 ? 'text-9xl' : 'text-4xl'
const h1 = document.querySelector('h1');

h1.classList.add(classToBeAdded);