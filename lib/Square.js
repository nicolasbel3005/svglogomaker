const Shape = require ("./Shape")

class Square extends Shape {
    constructor  (text = "", textColor = "", shapeColor = ""){
       super (text,textColor,shapeColor)

    }
    shapeRender(){
        return`<rect width="200" height="200" fill="${this.getShapeColor()}"/>`
    }
}
module.exports = Square