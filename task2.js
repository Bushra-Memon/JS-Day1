//1
let x;
x = 22;
if(x % 2 == 0)
{
    console.log("Number is even:",x);
}
else
{
    console.log("Number is odd:",x);
}

//2
let a = 10;
let b = 20;
let c = 30;
if(a > b && a > c)
{
    console.log("Largest Number:",a);
}
else if(b > a && b > c)
{
    console.log("Largest Number:",b);
}
else if(c > a && c > b)
{
    console.log("Largest Number:",c);
}

//3
for(let i = 1; i<=100 ; i++)
{
    if(i % 5 != 0)
    {
        console.log("numbers that are not Divisible by 5:",i);
    }
}

//4
let d = 10;
let f = 20;
let operation = "/";
switch(operation)
{
    case "+":
    console.log("Addition of number is:", d + f);
    break;

    case "-":
    console.log("substraction of number is:",d - f);
    break;

    case "*":
    console.log("Multiplication of number is:", d * f);
    break;

    case "/":
        if(f === 0)
        {
            console.log("Error: Division by zero is not Allowed");
        }
        else
            {
                console.log("Division of number is:",d / f);
            }
    break;

    case "%":
         if(f === 0)
        {
            console.log("Error: Modulus by zero is not Allowed");
        }
        else
            {
                console.log("Mod:",d % f);
            }
    break;

    default:
        console.log("Invalid Operation performed");
}

