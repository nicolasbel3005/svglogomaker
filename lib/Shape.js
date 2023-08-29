class Shape {
    
    constructor (text = "", textColor = "", shapeColor = ""){
        this.text = text
        this.textColor = textColor 
        this.shapeColor = shapeColor

    }

    setText (text){
        this.text = text
    }
    setTextColor(textColor){
        this.textColor = textColor
    }
    setShapeColor(shapeColor){
        this.shapeColor = shapeColor
    }
    getText(){
        return this.text
    }
    getTextColor(){
        return this.textColor
    }
    getShapeColor(){
        return this.shapeColor
    }
    shapeRender(){
return`<rect width="200" height="200" fill="${this.getShapeColor()}"/>`
    }
    render (){
        let shaperender= this.shapeRender()
        return `<svg height="200" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shaperender}
<text x="30" y="120" font-size="70" stroke="black" stroke-width="2" fill="${this.getTextColor()}" font-weight="900">${this.getText()}</text>
</svg>`
    }
}

module.exports = Shape
