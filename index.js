//examine the document Object
console.dir(document);
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.body)
console.log(document.head)
console.log(document.all)
console.log(document.all[10])
document.all[10].textContent="LOVE "
console.log(document.forms)


//get element by id 
console.log(document.getElementById('header-title'))
var headerTitle=document.getElementById('header-title')
console.log(headerTitle);
headerTitle.textContent="Hello"
headerTitle.innerText="goodbye"
console.log(headerTitle.innerText);  
headerTitle.innerHTML='<h3> hello</h3>';
headerTitle.style.borderBottom='solid 3px #000';
var items=document.getElementsByClassName('list-group-items');
console.log(items)
console.log(items[1]);
items[1].textContent = "hello2";
items[1].style.fontWeight ="bold";
const heading =document.getElementById("header-title")
console.log(heading)
const heading1=document.getElementsByTagName('h1')
console.log(heading1)