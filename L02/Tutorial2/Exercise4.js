//2 percent interest
let floatInterest = 2;

//total amount
let floatAmount = 10.00;

//double amount
let doubleAmount = floatAmount * 2;

//Year 1
let y = 1;

while (floatAmount <= doubleAmount)
{
    //print out total amount with interest
    floatAmount = floatAmount + (floatAmount * (floatInterest / 100));
    console.log(`Year ${y}: \$${floatAmount.toFixed(2)}`);
    
    //next year
    y++;
}

