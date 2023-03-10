class Shapes {
  constructor(color, type, backgroundcolor){
    this.color=''
  setcolor(color) = this.color; {
    this.color= new (color);
};
  this.type=''
settype(type) = this.type; {
  this.type= new (type)
};
this.backgroundcolor=''
setbackgroundcolor(backgroundcolor) = this.backgroundcolor; {
this.backgroundcolor= new (backgroundcolor)
};
  }};
  
 class Dot extends Shapes{
  render(){
    return  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="75" fill="${backgroundcolor}" />
    <text x="50%" y="50%" fill="${color}" font-size="72" text-anchor="middle" alignment-baseline="central">${type}</text>
  </svg>`
  }
}
  class Rectangle extends Shapes{
    render(){
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect x="25" y="25" width="250" height="150" fill="${backgroundcolor}" />
      <text x="50%" y="50%" fill="${color}" font-size="72" text-anchor="middle" alignment-baseline="central">${type}</text>
    </svg>`
    }
  }
  class Polygon extends Shapes{
    constructor(color, type, backgroundcolor) {
      super(color, type, backgroundcolor)
    }
render(){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <polygon points="150,25 275,175 25,175" fill="${backgroundcolor}" />
  <text x="50%" y="50%" fill="${color}" font-size="72" text-anchor="middle" alignment-baseline="central">${type}</text>
  </svg>`
}
  }


  var polygon = new Polygon('red', "test", "yellow")

  console.log(polygon)
  
 // module.exports = shapes