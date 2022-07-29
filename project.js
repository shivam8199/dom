<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style="color:blueviolet;">Registration Form </h1>
   <form action="" onsubmit="saveToLocalStorage(event)">
        <label for=":">Choose expenseAmount</label>
        <input type="number" name="amount" id="amount" required/>
        <label for="desc">Choose Description</label>
        <input type="text" name="desc" id="desc" required>
        <label for="category" >Choose a category:</label>

        <select id="category" name="category">
          <option value="movie">movie</option>
          <option value="parking">parking</option>
          <option value="popcorn">popcorn</option>
          <option value="extra">extra</option>
        </select>
      
        <input type="submit" value="Add Expense">
    </form>
    <ul id="listOfUsers"></ul>
    <script>
        function saveToLocalStorage(event)
        {
            event.preventDefault();
             const amount = event.target.amount.value;
             const desc = event.target.desc.value;
             const category = event.target.category.value;
            const obj =
            {
              amount,
              desc,
              category
            } 
           
            localStorage.setItem(obj.category, JSON.stringify(obj));
            showNewUserOnScreen(obj);
        }
        window.addEventListener("DOMContentLoaded" , () =>{
    
        for (var i=0; i<localStorage.length; i++)
        {
            var user = JSON.parse(localStorage.getItem(localStorage.key(i)))
          
            showNewUserOnScreen(user);
        }

        })
        function showNewUserOnScreen(user)
        {
            document.getElementById('amount').value = "";
            document.getElementById('category').value = ""; // email->emailid
            document.getElementById('desc').value = "";
            
         
            const parentNode = document.getElementById('listOfUsers');
            const childHTML = `<li id=${user.desc}> ${user.amount} - ${user.category}
                <button onclick=deleteUser('${user.category}')> Delete User </button>
                                                    <button onclick=editUserDetails('${user.category}','${user.amount}','${user.desc}')>Edit User </button>
            </li>`;
            
        
            parentNode.innerHTML = parentNode.innerHTML + childHTML;
        }

        
        function editUserDetails(category, amount, desc){

            document.getElementById('category').value = category; 
            document.getElementById('amount').value = amount;
            document.getElementById('desc').value =desc;
          

            deleteUser(category)
            }

      

        function deleteUser(category){
            console.log(category)
            localStorage.removeItem(category);
            removeUserFromScreen(category);

        }

        function removeUserFromScreen(category){
            const parentNode = document.getElementById('listOfUsers');
            const childNodeToBeDeleted = document.getElementById(category);
            if(childNodeToBeDeleted) {
                parentNode.removeChild(childNodeToBeDeleted)
            }
        }

        
    </script>
</body>
</html>
