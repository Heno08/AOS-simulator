function Model() { }

Model.prototype = {
  constructor: Model,
  sayName() {console.log(`I am a ${this.name}!`)}
}

export { Model }
