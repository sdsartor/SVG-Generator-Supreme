const inquirer = require('inquirer')
const { join } = require('path')
const { writeFile } = require('fs/promises')
const { createDocument } = require('./document')

class CLI {
    constructor()  {
        this.shape = '';
    }
run() {
return inquirer
.prompt([
    {
        type: "input",
        name: "text",
        message: "Please enter three letter in lowercase for best results.",
    }, 
])
.then(({ text }) => {
    this.shape = `${text}'`;
    return this.addContext();
 } )}}
.then(() => {
return writeFile(
join(__dirname, '', 'svg.html'),
createDocument(this.shape)
);
}
.then(() => console.log('SVG created'))
.catch((err) => {
    console.log(err);
    console.log('An error has occured')
});
)




addContext() {
return inquirer
  .prompt([
    {
        type: "input",
        name: "text",
        message: "Please enter three letter in lowercase for best results.",
    },
    {
    type: "input",
    name: "text-color",
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

])
};

.then (({ text, text-color, shape-color, shape }) => {
    this.shape.push({ text, priority });
    return this.addContext();
}
);

module.exports = CLI;
