const users = [
    {
       user_id : 102,
       user_name : 'fatima', 
       email :'memonfatima192@gmail.com',
       role : 'Manager',
       isActive : false
    },

    {
        user_id : 103,
        user_name : 'alifa', 
        email :'memonalifa192@gmail.com',
        role : 'Developer',
        isActive : true
    },

    {
        user_id : 104,
        user_name : 'moin', 
        email :'memonmoin192@gmail.com',
        role : 'HR',
        isActive : true
    },

    {
        user_id : 105,
        user_name : 'muskan', 
        email :'memonmuskan192@gmail.com',
        role : 'backend developer',
        isActive : true
    },

    {
        user_id : 106,
        user_name : 'faisal', 
        email :'memonfaisal192@gmail.com',
        role : 'frontend developer',
        isActive : false
    }
    
];
//3
const ul = document.querySelector("#list");

for(let i = 0; i<users.length; i++)
{
    const li = document.createElement("li");
    li.innerText = users[i].user_name;
    if(!users[i].isActive)
    {
        li.classList.add("inactive");
    }

const btn = document.createElement("button");
btn.innerText = "Toggle Status";
btn.addEventListener("click",function()
{
    users[i].isActive = !users[i].isActive;
    li.classList.toggle("inactive");
});
 li.appendChild(btn);
 ul.appendChild(li);
}



