let element = document.getElementById('calculateBtn').addEventListener('click', function()
{
    //Extract out the value from the first textbox
    let box1 = parseInt(document.getElementById("box1").value);
    
    //Extract out the value from the second textbox
    let box2 = parseInt(document.getElementById("box2").value);
    
    //Use alert to display the sum
    let sum1 = box1 + box2;
    alert(sum1);
}
)