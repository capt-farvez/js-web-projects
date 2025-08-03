//  Factory functions

function createCircle (radius) {
    return {
        radius,            // If the arguments and variable name same here, we can use single keyword: here, radius : radius
        draw (){
            console.log("Draw");
        }
    }
}

let circle1 = createCircle(2);
console.log(circle1);

// Constructor functions
function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log(draw);
    }
}
const circle2 = new Circle(4);
console.log(circle2); 