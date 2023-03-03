class shape{
  constructor(){
    this.colour=''
  }
  setcolour(colour){
    this.colour=(colour);
  }
}
class dot extends shape{
  render(){
    return  `<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="${this.colour}" />
    </svg>`
  }
}
  class rectangle extends shape{
    render(){
      return `<svg width="400" height="110">
      <rect width="300" height="100" style="fill:"${this.colour}" />
      </svg>`
    }
  }
  class polygon extends shape{
render(){
  return `<svg height="210" width="500">
  <polygon points="200,10 250,190 160,210" style="fill:${this.colour};stroke-width:1" />
  </svg>`
}
  }

  module.exports = {dot, rectangle, polygon}