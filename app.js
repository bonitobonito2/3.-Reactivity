const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    showAlert: function () {
      alert("hey");
    },
    keymonitor: function (event) {
      this.output2 = event.target.value;
    },
  },
});

app.mount("#assignment");
