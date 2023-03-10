
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter three letter in lowercase for best results.",
        function(value) {
            if (value.length > 3) {
            return "Please only place three letters and make sure to use lowercase."
            } else {
                return true;
            }
        },
        function(input) {
            input.value = input.value.toLowerCase();
        }
    },
    {
    type: "input",
    name: "textColour",
    message: "Please type a color or hexadecimal number for the color of the text." 
    },
    {
    type: "input",
    name: "color",
    message: "Please choose color or hexadecimal number for the color selection of the body of the logo."
    },
    {
    type: "list",
    name: "shape",
    message: "Please choose a chape for your icon.",
    choices: ["Circle", "Square", "Triangle"]
    },
    ]
    
    module.exports = questions