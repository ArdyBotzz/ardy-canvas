const Canvas = require("canvas");

const { formatVariable, applyText } = require("../../utils/functions");


module.exports = class GorilaCocho {
  
  constructor () {
    this.text1 = "Dont"
    this.text2 = "Once"
    this.text3 = "Search"
    this.text4 = "This"
    this.textColor = "#000000"
    this.backgroundImage = `${__dirname}/../../assets/img/gorila.jpeg`
  }
  
  setText1(text) {
    this.text1 = text
    return this
  }
  
  setText2(text) {
    this.text2 = text
    return this
  }
  
  setText3(text) {
    this.text3 = text
    return this
  }
  
  setText4(text) {
    this.text4 = text
    return this
  }
  
  setColorText(color) {
    this.textColor = color
    return this
  }
  
  toAttachment() {
    const canvas = Canvas.createCanvas(553, 555)
    const ctx = canvas.getContext("2d")
    
    ctx.globalAlpha = 1;
    ctx.font = "25px Bold"
    ctx.textAlign = 'center';
    ctx.fillStyle = this.textColor;
    
    ctx.fillText(this.text1, 266 - 222, 434)
    const tagLength = ctx.measureText(this.text1).width;
    
    ctx.fillText(this.text2, 746, 434)
    
    ctx.fillText(this.text3, 266 - 222, 519)
    
    ctx.fillText(this.text4, 746, 519)
    
    return canvas
    
  }
  
}