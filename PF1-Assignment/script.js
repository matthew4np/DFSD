const text = '{ "burger" : [' +
'{ "name":"Chicken Burger" , "price":5 },' +
'{ "name":"Beef Burger" , "price":6 },' +
'{ "name":"Cheese Burger" , "price":7 } ]}';


const obj = JSON.parse(text);

var list = "";
var total = "";
var totalPrice = 0;

for (i = 0; i < obj.burger.length; i++)
{
    list = list + `<h1 ID = \"${[i]}\" onclick=\"myClick(${[i]})\" class=\"burgers-item\">` + obj.burger[i].name + ', \$' + obj.burger[i].price + `</h1>`;
}

document.getElementsByClassName("burgerchoice").item(0).innerHTML = list;

function myClick(j){
    totalPrice = totalPrice + obj.burger[j].price;
    total = total + "<li>" + obj.burger[j].name + " " + "\$" + obj.burger[j].price + "</li>";
    document.getElementsByClassName("cost").item(0).innerHTML = total + "Total: " + "\$" + totalPrice;

}

