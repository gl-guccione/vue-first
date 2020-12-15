let assignment = Vue.createApp({
  data() {
    return {
      number: 0
    }
  },
  watch: {
    number(newValue, oldValue) {
      if (oldValue == 0) {
        const that = this;
        setTimeout(() => {
          that.number = 0;
        }, 5000);
      }
    }
  },
  methods: {
    add(num) {
      this.number += num;
    },
    showResult() {
      if (this.number == 37) {
        return 37;
      } else if (this.number < 37) {
        return 'Not there yet';
      } else if (this.number > 37) {
        return 'Too much';
      }
    }
  }

});

assignment.mount('#assignment');