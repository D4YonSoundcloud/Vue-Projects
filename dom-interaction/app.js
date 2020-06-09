new Vue({
  el: "#app",
  data: {
    title: "hello world",
    link: "http://google.com",
    finishedLink: '<a href="http//google.com">Google</a>',
    name: "D4Y",
    keyPressed: "",
    secondCounter: 0,
    x: 0,
    y: 0,
    age: 21,
    counter: 0,
  },
  computed: {
    output: function () {
      console.log("computerd!");
      return this.counter > 5 ? "Greater 5" : "Smaller than 5";
    },
  },
  methods: {
    sayHello: function () {
      this.title = "Hello!";
      return this.title;
    },
    ageMultiply() {
      return this.age * 3;
    },
    randomNum() {
      return Math.random();
    },
    increase(step, event) {
      this.counter += step;
      this.result = this.counter > 10 ? "greater than 10" : "smaller than 10";
    },
    decrease(step, event) {
      this.counter -= step;
      this.result = this.counter > 10 ? "greater than 10" : "smaller than 10";
    },
    updateCoordinates(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    },
    alertMe() {
      alert("alert");
    },
    storeKey(e) {
      this.keyPressed = e.target.value;
    },
    enterPressed(e) {
      this.keyPressed = e.target.value;
    },
    result() {
      console.log("method");
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
  },
});
