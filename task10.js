var form=document.getElementById('addForm');
form.addEventListener('submit', saveToLocalStorage);


function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailID.value;
    const phonenumber=event.target.phonenumber.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phonenumber',phonenumber);
}

