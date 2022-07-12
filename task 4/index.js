// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent='hello 2'
// items[1].style.fontWeight='bold'
// items[2].style.backgroundColor='green'
// //gives error
// //items.style.backgroundColor='#f4f4f4'
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold'
// }
//get element by tag name
var li=document.getElementsByClassName('list-group-item')
console.log(li)
console.log(li[1])
li[1].textContent='hello 2'
li[1].style.fontWeight='bold'
li[1].style.backgroundColor='green'
//gives error
//li.style.backgroundColor='#f4f4f4'
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='red'
}