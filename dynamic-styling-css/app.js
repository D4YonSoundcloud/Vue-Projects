new Vue({
  el: "#app",
  data: {
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    color: "green",
    color2: "grey",
    
    width: 50,
  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      };
    },
    myStyle: function () {
      return {
        backgroundColor: this.color2,
        width: this.width + "px",
      };
    },
  },
});
