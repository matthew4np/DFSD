const Obj = {
    burger: [
      {name:"Chicken Burger", price: 5, quantity: 1},
      {name:"Beef Burger", price: 6, quantity: 1},
      {name:"Fish Burger", price: 6, quantity: 1}
    ]
}

const orderTotal = {
    totalPrice: 0,
    orderBurgerItem: [],

    AddBurger: function(n){
        orderTotal.orderBurgerItem.push({
            name: Obj.burger[n].name,
            price: Obj.burger[n].price,
            quantity: Obj.burger[n].quantity
        })
        this.totalPrice = this.totalPrice + Obj.burger[n].price;
        document.getElementsByClassName("cost").item(0).innerHTML = JSON.stringify(orderTotal);
    },

    //Use the button Minus to remove the burger from the order burger array
    RemoveBurger: function(n){
        let h = Obj.burger[n].name
        let myArr = orderTotal.orderBurgerItem.map(myArrFunction)
        function myArrFunction(myObject){
            return myObject.name
        }
        let i = myArr.indexOf(h)
        if (i == -1)
        {
            document.getElementsByClassName("cost").item(0).innerHTML = JSON.stringify(orderTotal)
        } else
        {
            orderTotal.orderBurgerItem.splice(i, 1)
            document.getElementsByClassName("cost").item(0).innerHTML = JSON.stringify(orderTotal)
        }
    },

    DisplayBurgerItem : function() {
        let text = "";
        for (let i = 0; i < Obj.burger.length; i++)
        {
            let j = `\"${Obj.burger[i].name}\", ${Obj.burger[i].price}, ${Obj.burger[i].quantity}`;
    
            text += `<h3 class=\"burgers-item\">` + Obj.burger[i].name + " " + Obj.burger[i].price + " " + Obj.burger[i].quantity + `<br>` + `<button type=\"button\" onclick=\"orderTotal.AddBurger(${i})\">+</button>` + `<button type=\"button\">` + Obj.burger[i].quantity + `</button>` + `<button type=\"button\" onclick=\"orderTotal.RemoveBurger(${i})\">-</button>` + `<br>` + `</h3>`;
        }
        return text;
    }
}
//console.log(orderTotal.DisplayBurgerItem());
document.getElementsByClassName("burgerchoice").item(0).innerHTML = orderTotal.DisplayBurgerItem();
