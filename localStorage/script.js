const firstScreen = document.getElementById('first_screen');
const welcome = document.getElementById('welcome');
const userName = document.getElementById('name');
const btn = document.getElementById('btn');



function saveInfo() {
    window.localStorage.setItem('name', userName.value);
    let message = document.createElement('p');
    message.innerHTML = `Welcome, ${localStorage.name}`;
    welcome.append(message);
    firstScreen.style.display = 'none';
    welcome.style.display = 'flex';
}

function checkName() {
    if(window.localStorage.name) {
    let message = document.createElement('p');
    message.innerHTML = `Welcome, ${localStorage.name}`;
    welcome.append(message);
    firstScreen.style.display = 'none';
    welcome.style.display = 'block';
    } else{
    firstScreen.style.display = 'flex';
    welcome.style.display = 'none';
    }
}

btn.addEventListener('click', saveInfo);


checkName();



// const books = [
//     'book_1',
//     'book_2',
//     'book_3'
// ]

// const iteratorBooks = books.values();
// const iteratorBooks_1 = books.values();
// console.log(iteratorBooks.next());
// console.log(iteratorBooks.next());
// console.log(iteratorBooks.next());
// console.log(iteratorBooks.next());

// console.log(iteratorBooks_1.next());
// console.log(iteratorBooks_1.next());
// console.log(iteratorBooks_1.next());
// console.log(iteratorBooks_1.next());




// function* colors() {
//     yield 'red';
//     yield 'orange';
//     yield 'blue';
//     yield 'green';
//     yield 'yellow';
//     // return 'c';
// }

// const itColors = colors();
// console.log(itColors.next());
// console.log(itColors.next());
// console.log(itColors.next());

function* numbers(from, to) {
    for (let i = from; i <= to; i++) {
        if (i % 2 == 0) {
             yield `${i}`;
        }
    }
}

const even = numbers(2, 10);
console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());
console.log(even.next());