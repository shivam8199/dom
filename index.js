// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.head)
// console.log(document.body)
// console.log(document.doctype)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent="Hello"
// console.log(document.all[0])
// console.log(document.forms)
// console.log(document.images)
// console.log(document.getElementById('header-title'))
// var headerTitle=document.getElementById('header-title')
// console.log(headerTitle)
// headerTitle.innerText="blind"
// headerTitle.textContent="tysm"
// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)
// headerTitle.innerHTML='<h3>web development</h3>'
// headerTitle.style.borderBottom= 'solid 3px #000';
var items=document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent='hello 2'
items[1].style.fontWeight='bold'
items[2].style.backgroundColor='green'
//gives error
//items.style.backgroundColor='#f4f4f4'
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}
//get element by tag name
// var li=document.getElementsByClassName('list-group-item')
// console.log(li)
// console.log(li[1])
// li[1].textContent='hello 2'
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor='green'
// //gives error
// //li.style.backgroundColor='#f4f4f4'
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='red'
// }
// var header=document.querySelector('#main-header')
// header.style.borderBottom='solid 4px #ccc'
// var input=document.querySelector('input')
// input.value='Hello World'
// var submit=document.querySelector('input[type="submit"]')
// submit.value="SEND"
// var item=document.querySelector('.list-group-item')
// item.style.color='red'

// var lastItem=document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color='blue'

// var secondItem=document.querySelector
// ('.list-group-item:nth-child(2)')
// secondItem.style.color='corol'

//QUERYSELECTOR ALL
// var titles=document.querySelectorAll('.title')
// console.log(titles)
