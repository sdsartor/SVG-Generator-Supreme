const fs = require('fs');
const inquirer = require('inquirer');
const {dot, rectangle, polygon} = require('./lib/shape');

class image{
    constructor(){
        this.textcontent = ''
        this.chosenshape = ''
    }
    render(){
        return `<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">`
    }
textcontent(text, colour){
    this.textcontent= `<text x="150" y="125" font-size="60" fill=${this.colour} text-anchor="middle"`
}
chosenshape(shape){
    this.chosenshape = shape.render()
}
}



const questions = [
{
    type: "input",
    name: "text",
    message: "Please enter three letter in lowercase for best results.",
},
{
type: "input",
name: "textColour",
message: "Please type a color or hexadecimal number for the color of the text." 
},
{
type: "input",
name: "shape-color",
message: "Please choose color or hexadecimal number for the color selection of the body of the logo."
},
{
type: "list",
name: "shape",
message: "Please choose a chape for your icon.",
choices: ["Circle", "Square", "Triangle"]
},
]

