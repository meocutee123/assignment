const mixins = {
  methods: {
    getFormattedDate() {
      var date = new Date();
      var str =
        date.getMonth() +
        1 +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear() +
        ", " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        `${+date.getHours() > 12 ? " PM" : " AM"}`;

      return str;
    },
  },
  provide() {
    return {
      $v: this.$v,
    };
  },
  computed: {
    getID() {
      let str =
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9);
      return str;
    },
  },
};
export default mixins;
