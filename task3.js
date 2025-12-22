//1
function checkNumber(a)
{
    if (a % 2 == 0)
    {
        return "number is even";
    }
    else
        {
           return "number is odd";
        }
}
console.log(checkNumber(10));
console.log(checkNumber(5));
console.log(checkNumber(35));
console.log(checkNumber(40));

//2
function findMax(...numbers)
{
    let max = 0;
    for(let num of numbers)
    {
        if(num > max)
        {
            max = num;
        }
    }
    return max;
}
console.log("Largest number is",findMax(1,123,4))

//3
let number = [1,2,2,3,4];
let remove_duplicate = [];
for(let i = 0; i < number.length; i++)
{
if(!remove_duplicate.includes(number[i]))
{
    remove_duplicate.push(number[i]);
}
}
console.log(remove_duplicate);

//(ii)
let numbers = [1,2,2,3,4];
let squared = [];
for(let i = 0; i < numbers.length; i++)
{
    squared.push(numbers[i] * numbers[i]);
}
console.log(squared);

//4
function reverse(str)
{
   return str.split('').reverse().join('');
}
console.log(reverse("Hello"));

//5
function isPalindrome(str1)
{
    let reversed = str1.split('').reverse().join('');
    if(str1 == reversed)
    {
        return "String is Palindrome";
    }
    else
    {
        return "String is not Palindrome";
    }
}
console.log(isPalindrome('madam'));








