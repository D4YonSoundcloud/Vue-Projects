
var data = {
  title: "the Vuejs Instance",
  showParagraph: false,
};

Vue.component('hello', {
    template: '<h1>Hello!<h1>'
});


var vm1 = new Vue({
  el: "#app1",
  data: data,
  methods: {
    show() {
      this.showParagraph = true;
      this.updateTitle("The VueJS Instance (updated)");
      this.$refs.myButton.innerText = "Test";
    },
  },
  computed: {
    lowercaseTitle() {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title(value) {
      alert("Title change, new value: " + value);
    },
  },
});

vm1.$mount("#app1");

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = "Something else";

setTimeout(() => {
  vm1.title = "change by timer";
  vm1.show();
}, 5000);



var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "this is the second paragraph",
  },
  methods: {
    onChange: function () {
      vm1.title = "Changed!";
    },
  },
});




var vm3 = new Vue({
    template: '<h1> Hello! </h1>'
})

// vm3.$mount('#app3');




//other method
//vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el)
