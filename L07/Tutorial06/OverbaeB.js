/*
b.) Create a function-based object method named "Singer" that is able to fulfil the
above properties. Indicate the constructor, parameters, variables used in your function.
Create a method for your function object that calculates their maximum power.
This is formulated by power multiplied by level minus the current hit points.
Create a method "singerProfile" to allow printing of the singer statistics. Use template
literals to help in your code. It should read as follows:
“Momobae Level 7, gender Female, specialty ‘K-Pop’.
Power 49!
Hitpoints: Weak.”
Create two new singer object variable "momobae" and “minabae” using the function
based object you created. You may assume your values for your properties.
The hitpoints reference chart are to be followed:
<=50 = Weak
51-70 = Strong
71-100 = Amazing
*/

function Singer(name, specialty, power, hitpoints, level, gender){
    this.name = name;
    this.specialty = specialty;
    this.power = power;
    this.hitpoints = hitpoints;
    this.level = level;
    this.gender = gender;

    this.calMaxPower = function()
    {
        return (this.power * this.level) - this.hitpoints;
    };

    this.singerProfile = function()
    {
        
    }

    }

let momobee = new Singer('Momobee','K-Pop', 49, 28, 7, 'Female');

