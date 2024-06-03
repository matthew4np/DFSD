const Obj = {
    burger: [
      {name:"Chicken Burger", price: 5, quantity: 0},
      {name:"Beef Burger", price: 6, quantity: 0},
      {name:"Fish Burger", price: 6, quantity: 0}
    ]
}

const orderTotal = {
    totalPrice: 0,
    orderBurgerItem: [{}],

    AddBurger: function(){
        // this.orderBurgerItem[this.orderBurgerItem.length] = {
        //     name: n,
        //     price: p,
        //     quantity: q
        // }
        alert("hello");
        //document.getElementsByClassName("cost").item(0).innerHTML = `<p>` + n + `</p>`; //orderTotal.orderBurgerItem.length;
    },

    //Use the button Minus to remove the burger from the order burger array
    RemoveBurger: function(n){
        //find the index number of the chicken burger
        let i = this.orderBurgerItem.findIndex(n);
        //Use the splice function to delete the burger item
        this.orderBurgerItems.splice(i, 1);
        
    },

    DisplayOrderTotal : function(){
        let text = "";
        for (let i = 0; i < orderTotal.orderItem.length; i++)
        {
          text += "<h3>" + orderTotal.orderItem[i].orderName + " " + orderTotal.orderItem[i].orderPrice + " " + orderTotal.orderItem[i].orderQuantity  + "<br>" + "</h3>";
        }
        return text;
    },

    DisplayBurgerItem : function() {
        let text = "";
        for (let i = 0; i < Obj.burger.length; i++)
        {
            let j = `\"${Obj.burger[i].name}\", ${Obj.burger[i].price}, ${Obj.burger[i].quantity}`;
    
            text += `<h3 class=\"burgers-item\">` + Obj.burger[i].name + " " + Obj.burger[i].price + " " + Obj.burger[i].quantity + `<br>` + `<button type=\"button\" onclick=\"orderTotal.AddBurger(Obj.burger[i])\">+</button>` + `<button type=\"button\">` + Obj.burger[i].quantity + `</button>` + `<button type=\"button\" onclick=\"orderTotal.RemoveBurger(Obj.burger[i])\">-</button>` + `<br>` + `</h3>`;
        }
        return text;
    }
}
//console.log(orderTotal.DisplayBurgerItem())
document.getElementsByClassName("burgerchoice").item(0).innerHTML = orderTotal.DisplayBurgerItem();
