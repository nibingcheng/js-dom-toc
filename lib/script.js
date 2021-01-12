let firstElement = document.querySelector("h1");
let secondElements = document.querySelectorAll('h2')
let asideElement = document.getElementById('table-of-contents');

console.log(firstElement.innerText)
// console.log(secondElements[5].textContent)

// asideElement.classList.add('first');
let str = "<ul> <li>" + firstElement.innerText + "</li>";

for (let i=0; i<secondElements.length; i++) {
    str = str + "<li>" + secondElements[i].textContent + "</li>";
 }

 str = str + "</ul>";

asideElement.innerHTML = str;
