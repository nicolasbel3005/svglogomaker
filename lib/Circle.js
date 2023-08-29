const Shape = require ("./Shape")

class Circle extends Shape {
    constructor  (text = "", textColor = "", shapeColor = ""){
       super (text,textColor,shapeColor)

    }
    shapeRender(){
        return`<circle cx="100" cy="100" r="100" fill="${this.getShapeColor()}" />`
    }
}
module.exports = Circle