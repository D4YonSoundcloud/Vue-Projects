new Vue({
  //connect to the DOM element
  el: "#app",
  //Store Data to be used
  data: {
    title: "hello world",
    link: "http://google.com",
    finishedLink: '<a href="http//google.com">Google</a>',
    name: "D4Y",
    keyPressed: "",
    secondCounter: 0,
    timer: 0,
    value: 0,
    x: 0,
    y: 0,
    age: 21,
    counter: 0,
  },
  //depend properties of this vue instance
  computed: {
    output: function () {
      console.log("computerd!");
      return this.counter > 5 ? "Greater 5" : "Smaller than 5";
    },
    resultExercise: function () {
      return this.value > 37 ? "Done" : "Not there yet!";
    },
  },
  //execute code upon data changes
  watch: {
    counter: function (value) {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000);
    },
    value: function (value) {
      var vm = this;
      setTimeout(function () {
        vm.value = 0;
      }, this.timer * 1000);
    },
  },
  //methods of this vue instance
  methods: {
    sayHello: function () {
      this.title = "Hello!";
      return this.title;
    },
    //multiply age
    ageMultiply() {
      return this.age * 3;
    },
    //shows random number
    randomNum() {
      return Math.random();
    },
    //increase steps based on the numbers given
    increase(step, event) {
      this.counter += step;
      this.result = this.counter > 10 ? "greater than 10" : "smaller than 10";
    },
    //decreases steps based on the numbers given
    decrease(step, event) {
      this.counter -= step;
      this.result = this.counter > 10 ? "greater than 10" : "smaller than 10";
    },
    //update coordinates on page using e.page
    updateCoordinates(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    },
    //alert the user
    alertMe() {
      alert("alert");
    },
    //stores the key pressed when the key is pressed down
    storeKey(e) {
      this.keyPressed = e.target.value;
    },
    //goes off if the current key pressed is enter
    enterPressed(e) {
      this.keyPressed = e.target.value;
    },
    //shows result of the increase and decrease buttons
    result() {
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
    },
    // storeSeconds(e) {
    //   this.seconds = e.target.value * 1000;
    //   console.log(this.seconds);
    // },
  },
});
