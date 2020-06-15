new Vue({
  el: "#app",
  data: {
    title: "the VueJs Instance",
  },
  created: function () {
    console.log("created()");
  },
  beforeMount: function () {
    console.log("beforeMount()");
  },
  mounted: function () {
    console.log("mounted()");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate()");
  },
  updated: function () {
    console.log("updated()");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy()");
  },
  destroy: function () {
    console.log("destory()");
  },
  methods: {
    destroy() {
      this.$destroy();
    },
  },
});
