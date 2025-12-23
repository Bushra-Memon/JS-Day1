//1
const user = {
    User_id : 101,
    user_name : "bushra",
    email : 'memonbushra192@gmail.com',
    role : 'intern',
    isActive : true
}

console.log(user); //printing an object.
let val = Object.values(user); // printing only values of an object.
console.log(val)

console.log(user.isActive); // Updating isActive.
user.isActive = false;
console.log(user.isActive);

let text = ""; // printing an object looping through
for(let [key,value] of Object.entries(user))
{
    text += key + ": " + value + "\n";
}
console.log(text);

//2
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

console.log(users);

const active_users = users.filter(users => users.isActive == true);
console.log(active_users);

let user_names = users.map(users => users.user_name)
console.log(user_names);

let user1 = users.find(users => users.user_id === 102)
console.log(user1);



 






