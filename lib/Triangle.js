const Shape = require ("./Shape")

class Triangle extends Shape {
    constructor  (text = "", textColor = "", shapeColor = ""){
       super (text,textColor,shapeColor)

    }
    shapeRender(){
        return`<polygon points="100,10 200,200 0,200" fill="${this.getShapeColor()}" />`
    }
}
module.exports = Triangle