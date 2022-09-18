const app = Vue.createApp({
  data() {
    return {
      number: 0,
      enough: false,
      timeout: setTimeout(() => {
        this.number = 0;
      }, 5000),
    };
  },
  watch: {
    number() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
  methods: {
    add: function (number) {
      this.number += number;
      if (this.number > 37) {
        this.enough = true;
      }
    },
  },
});

app.mount("#assignment");
