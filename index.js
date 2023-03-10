const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions')



function x (data) {
 return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
 <polygon points="150,25 275,175 25,175" fill="${data.color}" />
 <text x="50%" y="50%" fill="${data.textColor}" font-size="72" text-anchor="middle" alignment-baseline="central">${data.text}</text>
 </svg>`


}



function writenewFile(SVG, data) {
    // fs is necessary to set up the file to be created and README is the 
    fs.writeFile(SVG, data, function(err) {
       console.log(SVG)
       console.log(data)
       if (err) {
        return console.log(err)
       } else {
    console.log('Way to go, your README file is being generated!')
       }
    })
    
    }
    function init() {
        inquirer.prompt(questions)
        .then(function(data) {
            console.log("DATA: ", data)
            writenewFile("logo.svg", x(data));
            console.log(data)
        })
    }


init()