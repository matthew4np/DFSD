const Obj = {
    burger: [
      {name:"Chicken Burger", price: 5, quantity: 0},
      {name:"Beef Burger", price: 6, quantity: 0},
      {name:"Fish Burger", price: 6, quantity: 0}
    ]
}

const orderTotal = {
    totalPrice: 0,
    orderItem: [{orderName: "Chicken Burger", orderPrice: 0, orderQuantity: 0}]}

var list = "";
var total = "";

function displayBurgerItem() {
    let text = "";
    for (let i = 0; i < Obj.burger.length; i++)
    {
      text += `<h3 class=\"burgers-item\">` + Obj.burger[i].name + " " + Obj.burger[i].price + " " + Obj.burger[i].quantity + `<br>` + `<button type=\"button\" onclick=\"btnAdd(${i})\">+</button>` + `<button type=\"button\">` + Obj.burger[i].quantity + `</button>` + `<button type=\"button\" onclick=\"btnMinus(${i})\">-</button>` + `<br>` + `</h3>`;
    }
    return text;
}

function displayOrderTotal() {
    let text = "";
    for (let i = 0; i < orderTotal.orderItem.length; i++)
    {
      text += "<h3>" + orderTotal.orderItem[i].orderName + " " + orderTotal.orderItem[i].orderPrice + " " + orderTotal.orderItem[i].orderQuantity  + "<br>" + "</h3>";
    }
    return text;
}

function addBurgerOrder(n, p) {
    for (let l of orderTotal.orderItem)
    {

        if (n == l.orderName)
        {
            l.orderQuantity++;
        }
        else
        {
            alert(p);
         l.push([{orderName: n, orderPrice: p, orderQuantuty: 1}]);
        }
    }
}

document.getElementsByClassName("burgerchoice").item(0).innerHTML = displayBurgerItem();


function btnAdd(j){
    addBurgerOrder(Obj.burger[j].name, Obj.burger[j].price);
    document.getElementsByClassName("cost").item(0).innerHTML = displayOrderTotal();
}

function btnMinus() {

}